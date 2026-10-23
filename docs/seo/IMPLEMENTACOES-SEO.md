# Implementações de SEO — Supletivo

Repositório: [`marketing942/supletivo`](https://github.com/marketing942/supletivo) · branch `seo/otimizacao-organica-20261023` (base `claude/nextjs-website-vercel-984Nd`) · 23/10/2026
Relatório consolidado do ecossistema: [RELATORIO-GERAL-SEO-ECOSSISTEMA.md](RELATORIO-GERAL-SEO-ECOSSISTEMA.md)

Commits na branch `seo/otimizacao-organica-20261023`. Nada foi publicado; merge e deploy dependem de aprovação.

## Arquivos modificados

| Arquivo | Alteração | Por quê |
|---|---|---|
| lib/constants.ts | `SITE_URL`: `NEXT_PUBLIC_SITE_URL` ou `https://supletivo.cppem.com.br` | Canonical no domínio próprio também quando acessado pelo *.vercel.app |
| app/layout.tsx | `metadataBase`, `alternates.canonical`, `og:url`, `og:site_name`, title |  |
| app/robots.ts, app/sitemap.ts (novos) | Robots com Sitemap absoluto; sitemap com a URL canônica |  |
| app/page.tsx | JSON-LD Organization/WebSite/WebPage |  |
| components/Faq.tsx | Todas as respostas renderizadas com `hidden`; `aria-controls` no botão | Conteúdo indexável, mesmo visual |

## Metadados — antes × depois

Extraídos do HTML renderizado localmente (Playwright/HTTP), antes e depois.

| Campo | Antes | Depois |
|---|---|---|
| `title` | Supletivo Online em 90 Dias \| Cppem Concursos | Supletivo Online EJA: Ensino Médio em 90 Dias \| Cppem |
| `description` | Termine o Ensino Médio ou Fundamental + Médio em apenas 90 dias, 100% online e com certificado válido em todo o Brasil. Atendimento humano pelo WhatsApp. | Termine o Ensino Médio ou Fundamental + Médio em apenas 90 dias, 100% online e com certificado válido em todo o Brasil. Atendimento humano pelo WhatsApp. |
| `canonical` | — | https://supletivo.cppem.com.br |
| `og:url` | — | https://supletivo.cppem.com.br |
| `og:site_name` | — | Supletivo Cppem Concursos |
| JSON-LD |  | Organization, WebSite, WebPage |

## Dados estruturados

Só tipos aplicáveis e só com dados que a página mostra. Nada de avaliações,
preços inventados, prêmios ou credenciais. Sem `FAQPage` (o resultado de FAQ
foi restrito a sites de governo e saúde em 2023 — [Google — Mudanças nos resultados de FAQ/HowTo (2023)](https://developers.google.com/search/blog/2023/08/howto-faq-changes) — e o
changelog da documentação registra a descontinuação em 2026 — [Google — Atualizações da documentação da Pesquisa (changelog)](https://developers.google.com/search/updates)) e sem `Course`
(o Course Info saiu dos resultados em 2025: [Google — Simplificação da página de resultados (Course Info descontinuado, 2025)](https://developers.google.com/search/blog/2025/06/simplifying-search-results)). Sem promessa
de resultado enriquecido.

## Benefícios esperados

- Título e descrição alinhados à intenção principal → mais impressões
  relevantes e CTR (a confirmar no Search Console).
- Canonical absoluto → sinais concentrados no domínio de produção
  ([Google — Como especificar uma URL canônica](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)).
- `WebSite` com `name` no subdomínio → chance de o Google exibir o nome do site
  em vez do host ([Google — Nomes de sites na Pesquisa (subdomínios)](https://developers.google.com/search/docs/appearance/site-names)).
- Preview correto no WhatsApp/redes (tráfego de compartilhamento).
