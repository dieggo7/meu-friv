/* ============================================================
   MEU FRIV — scripts
   Funciona abrindo os .html direto no navegador (sem servidor).
   ============================================================ */
(function () {
  var GAMES = window.GAMES || [];
  var CATS = window.CATEGORIES || [];

  function catLabel(id) {
    var c = CATS.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }

  function tileHTML(g, grande) {
    return '<a class="tile' + (grande ? ' tile--grande' : '') + '" style="--h:' + g.hue + '" ' +
      'href="jogo.html?id=' + encodeURIComponent(g.id) + '" title="' + g.title + '">' +
      '<span class="tile__selo">Exemplo</span>' +
      '<span class="tile__emoji" aria-hidden="true">' + g.emoji + '</span>' +
      '<span class="tile__nome">' + g.title + '</span></a>';
  }

  /* ---------- Página inicial ---------- */
  var grade = document.getElementById('grade');
  if (grade) {
    var lista = document.getElementById('lista-cats');
    var busca = document.getElementById('busca');
    var titulo = document.getElementById('titulo-grade');
    var contagem = document.getElementById('contagem');
    var cat = 'todos';

    lista.innerHTML = CATS.map(function (c) {
      return '<li><button type="button" data-cat="' + c.id + '" aria-pressed="' + (c.id === cat) + '">' +
        '<span class="e" aria-hidden="true">' + c.emoji + '</span>' + c.label + '</button></li>';
    }).join('');

    function render() {
      var q = busca.value.trim().toLowerCase();
      var itens = GAMES.filter(function (g) {
        return (cat === 'todos' || g.cat === cat) && (!q || g.title.toLowerCase().indexOf(q) > -1);
      });
      titulo.textContent = q ? 'Resultados da busca' : catLabel(cat);
      contagem.textContent = itens.length + (itens.length === 1 ? ' jogo' : ' jogos');
      if (!itens.length) {
        grade.innerHTML = '<div class="vazio"><h3>Nenhum jogo encontrado</h3>' +
          '<p>Tente outro nome ou escolha outra categoria.</p></div>';
        return;
      }
      /* Só no "todos" sem busca: 1º e 8º jogos em destaque (tile grande) */
      var destaque = (cat === 'todos' && !q);
      grade.innerHTML = itens.map(function (g, i) {
        return tileHTML(g, destaque && (i === 0 || i === 7));
      }).join('');
    }

    lista.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-cat]');
      if (!b) return;
      cat = b.getAttribute('data-cat');
      Array.prototype.forEach.call(lista.querySelectorAll('button'), function (x) {
        x.setAttribute('aria-pressed', x === b);
      });
      render();
    });
    busca.addEventListener('input', render);
    document.getElementById('btn-aleatorio').addEventListener('click', function () {
      var g = GAMES[Math.floor(Math.random() * GAMES.length)];
      location.href = 'jogo.html?id=' + encodeURIComponent(g.id);
    });
    render();
  }

  /* ---------- Página do jogo ---------- */
  var moldura = document.getElementById('moldura');
  if (moldura) {
    var id = new URLSearchParams(location.search).get('id');
    var jogo = GAMES.filter(function (g) { return g.id === id; })[0] || GAMES[0];

    document.title = jogo.title + ' — Meu Friv';
    document.getElementById('jogo-titulo').textContent = jogo.title;
    document.getElementById('jogo-cat').textContent = 'Categoria: ' + catLabel(jogo.cat);
    document.getElementById('migalha-cat').textContent = catLabel(jogo.cat);
    document.getElementById('migalha-jogo').textContent = jogo.title;
    document.getElementById('vazio-emoji').textContent = jogo.emoji;
    document.getElementById('vazio-titulo').textContent = jogo.title + ' (exemplo)';

    /* Se o jogo tiver "url", troca o aviso por um iframe */
    if (jogo.url) {
      moldura.innerHTML = '<iframe src="' + jogo.url + '" title="' + jogo.title +
        '" allowfullscreen loading="lazy"></iframe>';
    }

    var parecidos = GAMES.filter(function (g) { return g.cat === jogo.cat && g.id !== jogo.id; });
    if (parecidos.length < 4) {
      parecidos = parecidos.concat(GAMES.filter(function (g) {
        return g.cat !== jogo.cat && g.id !== jogo.id;
      })).slice(0, 4);
    }
    document.getElementById('parecidos').innerHTML = parecidos.slice(0, 6).map(function (g) {
      return tileHTML(g, false);
    }).join('');

    var outros = GAMES.filter(function (g) { return g.id !== jogo.id; }).slice(-8);
    document.getElementById('mais-jogos').innerHTML = outros.map(function (g) {
      return tileHTML(g, false);
    }).join('');

    document.getElementById('btn-tela-cheia').addEventListener('click', function () {
      if (moldura.requestFullscreen) moldura.requestFullscreen();
    });

    var curtir = document.getElementById('btn-curtir');
    var curtiu = false;
    curtir.addEventListener('click', function () {
      curtiu = !curtiu;
      curtir.textContent = curtiu ? '❤️ Curtido' : '🤍 Curtir';
      curtir.setAttribute('aria-pressed', curtiu);
    });
  }
})();
