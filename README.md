# Fala, Centreville!

Escuta anônima do Comitê pela Democracia do Centreville (Santo André, SP).

## Páginas

- `index.html`: a escuta. Uma pergunta por tela, botão para ouvir a pergunta e botão para responder falando.
- `index.html?modo=entrevista`: versão para voluntários. Guarda as respostas no celular quando falta internet e envia depois.
- `index.html?origem=zap` (ou outro nome): marca por onde a pessoa chegou. O cartaz usa `?origem=cartaz`.
- `index.html?bairro=ID`: versão de outro bairro, com título e textos próprios. Os bairros ficam em `bairros.js`; um bairro fora da lista funciona com textos genéricos. O cartaz aceita o mesmo parâmetro: `cartaz.html?bairro=ID`.
- `cartaz.html`: cartaz A4 com QR code para imprimir.
- `painel.html`: resultados somados, medos de mulheres e de homens separados, filtro por bairro e falas. Só abre com a senha de quem cuida das respostas. `painel.html?demo=1` mostra um exemplo com dados inventados.

## Onde ficam as respostas

Numa planilha Google do comitê, recebidas por um Apps Script (o código fica fora deste repositório). Nada de resposta fica no GitHub.

## Compromissos

Não coletamos nome, telefone, endereço nem voto. Não recebemos áudio. As respostas só são divulgadas somadas e não são repassadas a partidos, candidatos ou campanhas.

## Créditos

Desenvolvimento: Peterson Moreira, morador do Centreville.
Fotos: página "Centreville é nosso" (Facebook).
