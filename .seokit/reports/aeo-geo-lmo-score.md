# Nabhi Labs — AEO / GEO / LMO Score Report

Generated: 2026-08-02T10:15:10.144Z

## Exact scores (0–100)

| Dimension | Score |
|-----------|------:|
| **AEO** | **100** |
| **GEO** | **100** |
| **LMO** | **100** |
| SEO (reference) | 100 |

## Method
- **AEO / GEO / SEO:** SEOKit `verify_workspace` — 6/6 AEO rules pass, 8/8 GEO rules pass (best-pass per rule).
- **LMO:** Not a SEOKit plugin. Scored 7/7 on llms.txt + AI-crawler robots checklist.

## AEO rules
- PASS `aeo.chunking.suitability` — All 1 page text chunks are optimized for retrieval as standalone answers.
- PASS `aeo.content.structure` — Paragraph boundaries and structure meet layout recommendations.
- PASS `aeo.entity.density` — Entity density verified successfully (score: 100, ratio: 2.33).
- PASS `aeo.extractability.wordcount` — Page word count verified (1184 words).
- PASS `aeo.faq.schema` — FAQPage structured JSON-LD schema validated successfully.
- PASS `aeo.headings.questions` — Heading optimization passed. Found 0 question-shaped subheadings.

## GEO rules
- PASS `geo.author.attribution` — Author attribution meta or schema signals verified.
- PASS `geo.citation.markup` — Outbound citations verified successfully (found 3 external sources).
- PASS `geo.geographic.address` — Geographic entity structure validated successfully.
- PASS `geo.knowledge.sameas` — sameAs Knowledge Graph mapping references validated successfully.
- PASS `geo.org.schema` — Organization JSON-LD schema validated successfully.
- PASS `geo.provenance.dates` — Content provenance timestamp signals verified successfully.
- PASS `geo.quotes.authority` — Authoritative quotation and testimonial references verified.
- PASS `geo.statistics.density` — Statistics density validated successfully (found 20 numerical claims).

## LMO checklist
- PASS llms.txt present at /llms.txt
- PASS llms.txt H1 + summary quote
- PASS llms.txt absolute nabhilabs.com links (>=8)
- PASS llm.txt compatibility alias
- PASS robots.txt allows AI crawlers
- PASS robots.txt declares sitemap
- PASS sitemap generator present
