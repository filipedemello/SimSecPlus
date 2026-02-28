# Security+ SY0-701 Simulator (SimSecPlus) - Documentação Técnica

## 1. Visão Geral do Projeto e Resumo Funcional
O **SimSecPlus** é uma aplicação web *Single Page Application (SPA)* que funciona como um simulador de exames para a certificação CompTIA Security+ SY0-701. Ele abrange **900 questões** geradas através de templates.

**Resumo Funcional (O que o App faz):**
- **Testes Gerais e Customizados:** Permite que o usuário faça uma simulação cobrindo todos os conteúdos de forma ponderada (com pesos da prova real), ou escolha testar domínios específicos.
- **Opções de Temporizador:** Fornece contagem regressiva para Testes Gerais (com penalizações caso o tempo acabe) ou um "Study Mode" livre e sem pressão de tempo.
- **Diagnóstico Inteligente e Revisão:** Ao final, avalia métricas detalhadas de acertos por domínio e gera laudos com recomendações de estudos. Ele permite refazer os exames, contendo apenas os erros anteriores (via 'Review Mode').

## 2. Tecnologias Utilizadas (Stack)
A stack principal do projeto é mantida em um ambiente puramente client-side, sem frameworks pesados para garantir leveza e alta velocidade:
*   **Front-end:** HTML5 semântico, CSS3 (Vanilla) e JavaScript Puro (Vanilla JSES6+). Nenhuma biblioteca de interface (como React, Angular ou Vue) foi empregada, focando em performance e simplicidade.
*   **Dados e Dinamismo:** JSON e manipulação profunda de DOM usando seletores manuais nativos via `.querySelector`.
*   **Geração de Questões (Desenvolvimento):** Node.js é usado *apenas* internamente na fase de desenvolvimento (através do arquivo `generate.js`) para escrever templates estáticos nos blocos.
*   **Offline/PWA:** Service Workers (escrito manualmente no `sw.js` sem frameworks ou *Workbox*) suportando as APIs nativas do navegador de Caching.
*   **App Desktop (Wrapper):** Electron/Electron-packager via Node para gerar executáveis para o Windows (`.exe`), portando o código estático em um pacote próprio.

## 3. Banco de Dados e Dinâmica de Armazenamento
**Não existe um banco de dados tradicional** (como MySQL, IndexedDB, LocalStorage, PostgreSQL, SQLite ou MongoDB). Todo armazenamento da aplicação se baseia puramente na arquitetura **estática (in-memory)**:

1. **Geração e Chunking (`generate.js`)**: O volume das 900 questões seria muito pesado para um único arquivo gerenciar rapidamente. O script Node.js utiliza regras dos domínios processa o lote e particiona o volume de dados gerado em **30 arquivos Javascript separados** (`questions/block01.js` ao `block30.js`).
2. **Declaração nos Arrays Globais:** Cada vez que o `index.html` carrega, as marcações HTML injetam a resposta desses blocos que declaram a chave principal e preenchem uma mesma lista na Memória RAM chamada de `window.QUESTIONS`.
3. **Leitura In-Memory:** Nenhuma requisição a servidores ou consultas SQL são feitas durante o percurso da navegação. O script `app.js` retira os lotes lendo e re-ordenando arrays diretamente da memória do navegador localmente. 
    *   **Importante:** Sendo um funcionamento "In-Memory", todo o histórico, logs, notas ou questões customizadas são resetadas se a guia for recarregada.

## 4. Estrutura PWA e Suporte a Offline Data
A aplicação trata dados offline interceptando requisições com a API local de `Service Workers` embutidos sem precisar depender do LocalStorage ou IndexedDB. O funcionamento do PWA segue essas propriedades:

1. **Service Worker Manual (`sw.js`)**: Optou-se por escrever o Service Worker de forma manual e crua sem usar frameworks como Workbox. O SW segue uma estratégia de interceptação **Cache First (Cache caindo para Web)**. 
2. **Tática de Instalação e *Cache First*:** Assim que o `index.html` abre e a tela inicializa com internet, o JavaScript nativo aciona o navegador dizendo que o SW existe, listando no array `ASSETS` todos os pedaços e arquivos do site, desde a CSS de layout, as pastas de fontes e até mesmos *todos* os blocos JS das questões.
3. Se houver internet, ele baixa a URL no cache interno (com a chave ex: `security-plus-v2`).
4. Da próxima vez que o aplicativo for carregado (seja sem internet ou na rede), o `sw.js` checa rapidamente se já tem os módulos (`caches.match(event.request)`) dentro do celular/PC e devolve-os de forma instantânea sem pedir por servidores, oferecendo uma responsividade imediata e modo offline inquebrável.
5. **Manifest:** Regras adicionais como `manifest.json`, declaram o "Theme Color", e a capacidade de suportar ícones autônomos para "Adicionar à Tela de Início" focados especialmente para o iOS e Safari (com *apple-mobile-web-app-capable*).

## 5. Estrutura da Interface e Engine do Simulador

### Script Principal da Interface: `app.js`
Este arquivo (Vanilla JS puro) é a "Engine" real da aplicação que os usuários utilizam. Funciona ocultando/mostrando telas no `index.html` (com `classList.remove('active')`) para simular a mudança de páginas através das views.

* **Funções Fundamentais no `app.js`:**
  * `initQuiz()`: Inicializa o fluxo do quiz. Seleciona as perguntas (respeitando pesos se for "General") e cria uma ordem de embaralhamento dinâmico (`shuffleArray`) para as alternativas A, B, C, D de cada pergunta.
  * `selectQuestions(domains, count)`: Seleciona e extrai das opções em memória a quantidade precisa de blocos pro-rata.
  * `startTimer()` e `updateTimerDisplay()`: Controlam cronômetros visuais. Ao zerar os 60 segundos p/ questão, forçam o `finishQuiz()` como "Timed-out".
  * `renderQuiz()`: Pinta todo o loop, checando se a pontuação, o painel do "Hint" (Dica) foi ativado, e re-injeta a contagem ao longo dos "Dots", que deixam você pular páginas da navegação da questão que desejar.
  * `handleAnswer(displayIndex)`: Dispara quando um botão correspondente a resposta clica. Automaticamente identifica no embaralhamento onde a opção exata de resposta está localizada marcando a interface dinamicamente como vermelha = erro (`fb-incorrect`) / verde = certo.
  * `renderResults()` & `renderDiagnostic()`: Calcula e constrói dinamicamente (incluindo o DOM com SVG dos ícones de troféus) a tela de métricas e sugestões pós-exame baseada na regra dos percentuais calculados.
