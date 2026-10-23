# Auditoria SEO — Supletivo

Repositório: [`marketing942/supletivo`](https://github.com/marketing942/supletivo) · branch `seo/otimizacao-organica-20261023` (base `claude/nextjs-website-vercel-984Nd`) · 23/10/2026
Relatório consolidado do ecossistema: [RELATORIO-GERAL-SEO-ECOSSISTEMA.md](RELATORIO-GERAL-SEO-ECOSSISTEMA.md)

## Arquitetura

- **Domínio de produção:** cppem-supletivo-filiado.vercel.app (possível domínio próprio `supletivo*.cppem.com.br`) — evidência: `SUPLETIVO_REDIRECT` no `script.js` do Contato Unicive e mapa de origens do Apps Script.
- **Stack:** Next.js 14.2 (App Router), React 18, TypeScript, Tailwind 3. Vercel. A branch padrão do GitHub é `claude/nextjs-website-vercel-984Nd` (não há `main`).
- **Renderização:** Página estática pré-renderizada (SSG). Componentes cliente para FAQ, captação e popup.

## Rotas

| Rota | O que é | Indexação |
|---|---|---|
| / | Landing do Supletivo EJA (Estação Cursos; atendimento e matrícula pela CPPEM) | Indexar |
| /robots.txt, /sitemap.xml | Novos | — |

## Finalidade e classificação

- **Objetivo:** Captar interessados em concluir Fundamental/Médio pelo supletivo EJA online. Captação em modal → planilha → WhatsApp.
- **Unidade de negócio:** CPPEM (parceira filiada da Estação Cursos)
- **Público:** Adultos (18+) sem Ensino Médio; também quem vem do Contato Unicive.
- **Tipo de página:** Landing de vendas/captação.
- **Indexação recomendada:** Indexar, com ressalvas de conformidade das promessas (ver P1).
- **Potencial orgânico:** **Alto (demanda) / Médio (viabilidade)** — "Supletivo online" e "EJA online" têm demanda nacional, mas a SERP tem guias de marcas grandes (Pravaler, Descomplica) e a página é de parceiro filiado — risco de conteúdo parecido com outras páginas da rede.

## Problemas encontrados

Gravidade: **P0** crítico (indexação/integridade) · **P1** alto impacto · **P2** médio · **P3** evolução · **Info** registro sem ação de SEO.

| Sev. | Problema | Evidência | Impacto | Status |
|---|---|---|---|---|
| P0 | Sem canonical, robots e sitemap num domínio *.vercel.app | Nenhum dos três existia | Indexação sem URL preferida; se houver domínio próprio, duas versões competem | Corrigido (canonical dinâmico via `SITE_URL`) |
| P1 | FAQ sem as respostas no HTML | `{isOpen && <div>...}`: só a resposta aberta era renderizada | Nove de dez respostas invisíveis para o buscador | Corrigido (todas no HTML com `hidden`) |
| P1 | Promessas sensíveis (YMYL) | "Supletivo EJA reconhecido pelo MEC", "MEC certificado reconhecido", "90 dias", keyword `certificado MEC` | Certificação de EJA a distância depende de credenciamento no conselho estadual; prazos variam. Promessa sem fonte reduz confiança (helpful content) e pode gerar reclamações | Recomendado (validar com a Estação Cursos e citar o ato de credenciamento) |
| P2 | Nome do parceiro inconsistente | "Estação e Cursos" (banner/rodapé) × "Estação Cursos" (FAQ) | Entidade confusa | Recomendado |
| P2 | Sem og:image |  | Preview sem imagem | Recomendado (precisa de arte) |
| P2 | Next 14.2.33 com alerta de segurança | `npm ci` avisa sobre o advisory de 11/12/2025 | Segurança | Recomendado (fora do escopo de SEO) |
| P3 | `npm run lint` interativo | `next lint` sem configuração do ESLint abre um prompt | Sem lint no CI | Documentado |
| P3 | GTM carregado depois da hidratação | `next/script` com `afterInteractive` | Pageviews de quem sai muito rápido podem não contar | Documentado (não alterado) |

## Limitações desta auditoria

- **Produção inacessível desta sessão.** O proxy de rede do ambiente recusou
  conexões a `*.cppem.com.br` e `*.vercel.app`, e o leitor de páginas não
  resolveu esses domínios. Nada foi medido no site publicado: HTML servido,
  status HTTP, redirecionamentos e headers reais ficam **não validados**.
  Toda a auditoria foi feita no código e em servidores locais.
- **Sem Google Search Console, GA4, Keyword Planner, Trends, Semrush ou Ahrefs.**
  Não há volume, dificuldade, CPC nem posição. Nenhum número desse tipo
  aparece aqui. As prioridades de palavra-chave são **estimativas
  qualitativas** (intenção, tipo de página que aparece hoje, relevância
  comercial) e devem ser confirmadas no Search Console e no Planejador.
- **SERP observada com a busca web disponível, que não é o Google.** Os
  concorrentes listados são os que apareceram nessa busca e servem como
  indício, não como ranking do Google.
- **Lighthouse é dado de laboratório**, rodado localmente com os terceiros
  (GTM, PixelX, fontes do Google) bloqueados. Serve para comparar antes ×
  depois, não para prever o Core Web Vitals real (dado de campo do CrUX).
