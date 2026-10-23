# Auditoria de tracking — Supletivo

Repositório: [`marketing942/supletivo`](https://github.com/marketing942/supletivo) · branch `seo/otimizacao-organica-20261023` (base `claude/nextjs-website-vercel-984Nd`) · 23/10/2026
Relatório consolidado do ecossistema: [RELATORIO-GERAL-SEO-ECOSSISTEMA.md](RELATORIO-GERAL-SEO-ECOSSISTEMA.md)

Regra seguida: nenhum ID, evento, parâmetro, script, seletor, endpoint, UTM ou
regra de consentimento foi alterado. Nenhum token ou credencial aparece aqui.

## Inventário

| Integração | Onde | Detalhe |
|---|---|---|
| GTM server-side (loader first-party) | `index.html`, 1º script do `<head>` | `https://sgtm.cppem.com.br/metrics/` — o ID do container está no path; mesmo container das demais landings |
| GTM noscript | `index.html`, `<body>` | `https://sgtm.cppem.com.br/ns.html?id=GTM-PJ379FLQ` |
| PixelX | carregada pelo GTM (`pxa.cppem.com.br`) | máscara de telefone `.pxa_mask_phone`; o Lead é a regra do painel vinculada ao `id` do `<form>` |
| GTM (next/script) | `app/layout.tsx`, `id=gtm-loader`, `afterInteractive` | mesmo loader `sgtm.cppem.com.br/metrics/` |
| Formulário (modal) | `components/LeadCapture.tsx`, id `IPEyzyfmJhKQEYIXAlZH` (`PIXELX_FORM_ID`) | aberto pelos `LeadCtaButton` |
| Planilha de leads | POST Apps Script `?aba=SUPLETIVO` | data, email, mensagem, nome, origem, pagina, telefone, utm_campaign, utm_source, whatsapp |
| Redirecionamento | `WHATSAPP_URL` | `links.cppem.com.br/cppem-contato?text=...` |

## Antes × depois

- Arquivos de tracking/fluxo (`components/LeadCapture.tsx`, `LeadCtaButton.tsx`, `OfferPopup.tsx`, o loader do GTM em `app/layout.tsx` e as constantes de lead/GTM em `lib/constants.ts`): **sem nenhuma alteração** (`git diff` vazio).
- Mudanças só em `<head>` (metadados/JSON-LD), arquivos novos (robots, sitemap,
  imagens OG) e imagens otimizadas com o mesmo nome.
- Resultado dos testes de execução: ver [RELATORIO-DE-TESTES.md](RELATORIO-DE-TESTES.md).

## Classificação

- GTM loader, noscript, dataLayer, formulários, campos enviados à planilha,
  UTMs e redirecionamentos: **validado por teste de execução** (antes × depois idênticos).
- Lead da PixelX / conversões no Meta e no GTM server-side: **não validado por falta de acesso**.

## Riscos remanescentes

- Mesmo id de formulário da PixelX que Contato CPPEM e Mentoria Individual (ver AUDITORIA-TRACKING).
