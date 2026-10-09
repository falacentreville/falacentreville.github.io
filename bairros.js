/* Links por bairro DESLIGADOS por enquanto: o site é só "Fala, Centreville!".
 * Para ligar no futuro, troque para true (e pense uma capa própria para os bairros irmãos). */
window.BAIRROS_ATIVOS = false;

/* Bairros com link próprio: falacentreville.github.io/?bairro=ID
 * Para incluir um bairro, copie o bloco do Centreville, troque o ID e os textos.
 * Campos opcionais: faixa, foto, mural, memoria_dica, cartaz.
 * art: "o" ou "a", para escrever "com o Centreville" ou "da Cidade São Jorge".
 */
window.BAIRROS = {
  centreville: {
    nome: "Centreville",
    nome_titulo: "Centre­ville",   // ­ deixa a palavra quebrar com hífen em tela estreita
    art: "o",
    comite: "Comitê pela Democracia do Centreville",
    tag: "Comitê pela Democracia · Centreville",
    faixa: "Desde 16 de julho de 1982, na luta",
    lead: "Este bairro nasceu de gente que não esperou ninguém fazer por ela. Agora a gente quer te ouvir.",
    memoria_dica: "A ocupação, uma festa, uma luta, uma pessoa. Sem nome completo de ninguém.",
    foto: {
      src: "img/ocupacao-1982.jpg", w: 472, h: 288,
      alt: "Foto antiga em preto e branco: moradores caminhando juntos pela rua do Centreville, na época da ocupação",
      legenda: "Os primeiros moradores, na época da ocupação. Foto: página “Centreville é nosso”."
    },
    mural: {
      src: "img/mural.jpg", w: 414, h: 172,
      alt: "Mural de grafite colorido com a palavra Centre-Ville e moradores pintados",
      legenda: "Mural do Centreville. Foto: página “Centreville é nosso”."
    },
    cartaz: "Desde 16 de julho de 1982, o Centreville se faz com gente que não espera ninguém fazer por ela. Conte o que pesa na sua casa e o que precisa mudar."
  }
};

/* Bairro que não está na lista: a página funciona com textos genéricos e grava o ID do link. */
window.BAIRRO_GENERICO = {
  nome: null,
  art: "o",
  comite: "Comitê pela Democracia",
  tag: "Comitê pela Democracia",
  lead: "A gente quer ouvir quem vive aqui.",
  memoria_dica: "Uma festa, uma luta, uma pessoa. Sem nome completo de ninguém.",
  cartaz: "Conte o que pesa na sua casa e o que precisa mudar no bairro."
};

/* Lê ?bairro= do endereço. Sem parâmetro, é o Centreville. */
window.lerBairro = function () {
  const pedido = window.BAIRROS_ATIVOS ? new URLSearchParams(location.search).get("bairro") : null;
  const bruto = pedido || "centreville";
  const id = bruto.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40) || "centreville";
  const dados = window.BAIRROS[id] || window.BAIRRO_GENERICO;
  const nome = dados.nome || "bairro";
  const art = dados.art === "a" ? "a" : "o";
  return {
    id, dados, nome,
    titulo: dados.nome_titulo || dados.nome || "bairro",
    com: `com ${art} ${nome}`,   // "com o Centreville"
    de: `d${art} ${nome}`        // "do Centreville"
  };
};
