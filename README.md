Juventude pelos Direitos Humanos
SPA em React que apresenta a Declaração Universal dos Direitos Humanos de um jeito direto, visual e sem burocracia — em formato de zine/manifesto, com inspiração em street art e pulp.

Sobre o projeto
O objetivo é tornar os 30 artigos da Declaração Universal dos Direitos Humanos acessíveis e fáceis de entender, conectando o conteúdo a referências históricas, organizações que atuam na linha de frente e espaços de participação (fórum e quiz).

Páginas
Boas-vindas — tela de entrada com mensagens rotativas de impacto.
Direitos (home) — os 30 direitos da Declaração Universal, cada um com artigo detalhado: como funciona na prática e por que ainda falha, com vídeo explicativo.
Ícones ("A Linha de Frente") — perfis de figuras históricas ligadas à luta por direitos humanos, com dossiê expansível.
ONGs ("Rede de Ação") — organizações parceiras que atuam ativamente na defesa de direitos humanos, com link para Instagram.
Fórum ("Voz Ativa") — mural onde qualquer pessoa pode publicar, responder e apoiar manifestos.
Quiz ("Teste sua Consciência") — perguntas sobre os direitos humanos, com sistema de pontuação e eliminação por erros.
Tecnologias
React 18
Vite — build e dev server
Vitest + Testing Library — testes
CSS puro (sem framework), com variáveis CSS para o design system
Arquitetura
O código é organizado em camadas para manter os componentes de UI desacoplados da origem dos dados — hoje local, e futuramente servidos por um backend Node vanilla + MySQL:

src/
├── assets/        # imagens e mapas de assets
├── components/    # componentes de apresentação (UI)
├── data/          # dados estáticos (fonte única da verdade)
├── hooks/         # hooks de dados (carregando/erro) e de UI
├── services/      # camada de acesso a dados (troca local → API sem tocar na UI)
├── utils/         # funções puras reutilizáveis
├── App.jsx        # orquestração: navegação + layout
└── index.css      # design system (zine/brutalista + neon sutil)
Cada domínio (direitos, parceiros, ícones, quiz) segue o mesmo fluxo: data/ → services/ → hooks/ → components/. Quando o backend existir, apenas o corpo das funções em services/ muda para chamadas fetch; nada na UI precisa ser alterado.

Guia de estilo
Visual brutalista/zine: bordas grossas pretas, sombras sólidas offset e tipografia em caixa alta, com um glow neon sutil (ciano/rosa) por trás das sombras como acento — referência à estética pulp e street art. Paleta e tokens em :root no index.css.

Como rodar
npm install
npm start       # dev server em http://localhost:3000
npm test        # testes (Vitest)
npm run build   # build de produção
Roadmap
Backend em Node vanilla + MySQL para servir direitos, parceiros, ícones e questões do quiz (camada services/ já preparada para essa troca).
Persistência real dos posts do fórum.
Licença
MIT — veja LICENSE.
