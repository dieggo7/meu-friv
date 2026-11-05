  /* ============================================================
   LISTA DE JOGOS (apenas exemplos — nenhum funciona)
   Para adicionar um jogo real depois:
   - id:    identificador único (usado na URL jogo.html?id=...)
   - title: nome exibido
   - cat:   categoria (precisa existir em CATEGORIES)
   - emoji: ícone da miniatura
   - hue:   cor da miniatura (0–360)
   - url:   (opcional) endereço do jogo, aberto no iframe
   ============================================================ */
window.CATEGORIES = [
  { id: "todos",      label: "Todos os jogos", emoji: "🎮" },
  { id: "acao",       label: "Ação",           emoji: "💥" },
  { id: "aventura",   label: "Aventura",       emoji: "🧭" },
  { id: "corrida",    label: "Corrida",        emoji: "🏎️" },
  { id: "esportes",   label: "Esportes",       emoji: "⚽" },
  { id: "meninas",    label: "Meninas",        emoji: "🎀" },
  { id: "puzzle",     label: "Puzzle",         emoji: "🧩" },
  { id: "estrategia", label: "Estratégia",     emoji: "♟️" },
  { id: "tiro",       label: "Tiro",           emoji: "🎯" }
];

window.GAMES = [
  { id: "jogo-01", title: "Corrida Maluca",      cat: "corrida",    emoji: "🏎️", hue: 8   },
  { id: "jogo-02", title: "Bolhas Coloridas",    cat: "puzzle",     emoji: "🫧", hue: 190 },
  { id: "jogo-03", title: "Super Pulador",       cat: "aventura",   emoji: "🐸", hue: 120 },
  { id: "jogo-04", title: "Defesa da Torre",     cat: "estrategia", emoji: "🏰", hue: 265 },
  { id: "jogo-05", title: "Futebol de Dedo",     cat: "esportes",   emoji: "⚽", hue: 95  },
  { id: "jogo-06", title: "Salão de Beleza",     cat: "meninas",    emoji: "💇‍♀️", hue: 320 },
  { id: "jogo-07", title: "Ninja Veloz",         cat: "acao",       emoji: "🥷", hue: 230 },
  { id: "jogo-08", title: "Caça ao Tesouro",     cat: "aventura",   emoji: "💎", hue: 45  },
  { id: "jogo-09", title: "Atirador de Elite",   cat: "tiro",       emoji: "🎯", hue: 355 },
  { id: "jogo-10", title: "Quebra-Cabeça Zoo",   cat: "puzzle",     emoji: "🦁", hue: 30  },
  { id: "jogo-11", title: "Moto Radical",        cat: "corrida",    emoji: "🏍️", hue: 15  },
  { id: "jogo-12", title: "Basquete Rápido",     cat: "esportes",   emoji: "🏀", hue: 22  },
  { id: "jogo-13", title: "Vestir a Princesa",   cat: "meninas",    emoji: "👑", hue: 300 },
  { id: "jogo-14", title: "Guerra de Tanques",   cat: "tiro",       emoji: "🪖", hue: 140 },
  { id: "jogo-15", title: "Comandante Espacial", cat: "estrategia", emoji: "🚀", hue: 250 },
  { id: "jogo-16", title: "Herói da Selva",      cat: "acao",       emoji: "🦍", hue: 100 },
  { id: "jogo-17", title: "Ilha Misteriosa",     cat: "aventura",   emoji: "🏝️", hue: 175 },
  { id: "jogo-18", title: "Combo de Frutas",     cat: "puzzle",     emoji: "🍓", hue: 340 },
  { id: "jogo-19", title: "Kart Arco-Íris",      cat: "corrida",    emoji: "🌈", hue: 200 },
  { id: "jogo-20", title: "Pizzaria da Maria",   cat: "meninas",    emoji: "🍕", hue: 12  },
  { id: "jogo-21", title: "Arqueiro Lendário",   cat: "tiro",       emoji: "🏹", hue: 160 },
  { id: "jogo-22", title: "Golfe Mini",          cat: "esportes",   emoji: "⛳", hue: 130 },
  { id: "jogo-23", title: "Exército de Formigas",cat: "estrategia", emoji: "🐜", hue: 0   },
  { id: "jogo-24", title: "Luta de Robôs",       cat: "acao",       emoji: "🤖", hue: 210 },
  { id: "jogo-25", title: "Labirinto Neon",      cat: "puzzle",     emoji: "🌀", hue: 280 },
  { id: "jogo-26", title: "Piratas do Mar Azul", cat: "aventura",   emoji: "🏴‍☠️", hue: 220 },
  { id: "jogo-27", title: "Skate no Parque",     cat: "esportes",   emoji: "🛹", hue: 50  },
  { id: "jogo-28", title: "Monster Truck",       cat: "corrida",    emoji: "🚙", hue: 25  }
];
