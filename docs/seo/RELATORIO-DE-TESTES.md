# Relatório de testes — Supletivo

Repositório: [`marketing942/supletivo`](https://github.com/marketing942/supletivo) · branch `seo/otimizacao-organica-20261023` (base `claude/nextjs-website-vercel-984Nd`) · 23/10/2026
Relatório consolidado do ecossistema: [RELATORIO-GERAL-SEO-ECOSSISTEMA.md](RELATORIO-GERAL-SEO-ECOSSISTEMA.md)

## Testes técnicos

- `npm ci` OK · `npx tsc --noEmit` OK · `npm run build` OK (rotas: `/`, `/robots.txt`, `/sitemap.xml`, estáticas).
- `npm run lint` **não executado**: `next lint` sem configuração abre um assistente interativo (pré-existente).
- `robots.txt` e `sitemap.xml` gerados conferidos; canonical/og:url = `https://cppem-supletivo-filiado.vercel.app` sem `NEXT_PUBLIC_SITE_URL`.
- FAQ: as 10 respostas presentes no HTML (`faq-resposta-0…9`).

## Testes funcionais e de tracking

Original (worktree da `claude/nextjs-website-vercel-984Nd`) e modificado servidos localmente lado a
lado; Chromium (Playwright) com **toda a rede externa interceptada**: o que a
página tenta chamar é registrado e abortado, então nenhum lead fictício chegou
à planilha, à PixelX ou ao WhatsApp.

| Teste | Resultado | Classificação |
|---|---|---|
| Fluxo de formulário/CTA (antes × depois) | Idêntico | Validado por teste de execução |
| Eventos no dataLayer no fluxo | gtm.js | Validado por teste de execução |
| Chamadas externas no fluxo (interceptadas, nada enviado) | `GET https://links.cppem.com.br/cppem-contato ?text`<br>`GET https://sgtm.cppem.com.br/metrics/`<br>`POST https://script.google.com/macros/s/AKfycbxdFplWVSfhTjvyIA7HIWb645xRjGNhBVhTdTf5UMjo0lSpW_A_jCuys0qB4uImKXPQ/exec ?aba body{data,email,mensagem,nome,origem,pagina,telefone,utm_campaign,utm_source,whatsapp}` | Validado por teste de execução |
| Scripts (GTM e demais) idênticos | Não — ver nota | Validado por teste de execução |
| noscript do GTM idêntico | Sim | Validado por teste de execução |
| Formulários (ids, names, classes) idênticos | Sim | Validado por teste de execução |
| dataLayer no carregamento idêntico | Sim | Validado por teste de execução |
| Erros de JavaScript | Nenhum novo | Validado por teste de execução |
| DOM do `<body>` (tag, id, name, class, href, data-*) | 101 diferença(s) esperada(s) — ver nota | Validado por teste de execução |
| Captura de tela (desktop / mobile) | 0.0% / 0.0% de pixels diferentes | Validado por teste de execução |

**Nota:** os scripts diferem só nos hashes dos chunks do Next (rebuild); o loader do GTM é idêntico. O DOM difere no FAQ: as respostas fechadas agora existem no HTML com `hidden` (intencional); as capturas de tela são idênticas.

## Lighthouse (laboratório, mobile simulado, terceiros bloqueados)

| | Resultado |
|---|---|
| Antes | perf 96 · SEO 100 · acess. 96 · BP 96 · LCP 2,8 s · TBT 70 ms |
| Depois | perf 95 · SEO 100 · acess. 96 · BP 96 · LCP 2,7 s · TBT 120 ms |

Variação de execução; o bundle da rota cresceu 0,8 kB (respostas do FAQ no HTML).

## O que não foi validado

- Disparo do **Lead na PixelX** e o recebimento no GTM server-side/Meta: o
  container e a PixelX vêm de `sgtm.cppem.com.br`/`pxa.cppem.com.br`, bloqueados
  neste ambiente. **Não validado por falta de acesso.** O código que a PixelX lê
  (id do form, `name` dos campos, evento `submit`) está idêntico.
- HTML, headers e redirecionamentos **em produção** (domínios bloqueados).
- Rich Results Test e Schema Markup Validator (sem acesso aos sites do Google);
  o JSON-LD foi validado por parse e por conferência manual dos campos
  obrigatórios.
