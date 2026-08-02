# RAG Evaluation Checklist (Nabhi Labs)

Practical gates before scaling retrieval-augmented generation.

## Retrieval quality
- [ ] Gold questions with known source passages
- [ ] Recall@k and citation precision measured on your corpus
- [ ] Out-of-scope / adversarial queries refuse or escalate
- [ ] Hybrid lexical + dense beats either alone (or documented why not)
- [ ] Index freshness / versioning is owned

## Groundedness and safety
- [ ] Answers scored for support by retrieved evidence
- [ ] Insufficient evidence triggers refusal
- [ ] Permission tests: users cannot retrieve unauthorized chunks
- [ ] Risk notes aligned with NIST AI RMF / OECD AI Principles

## Production readiness
- [ ] Latency and cost per query instrumented
- [ ] Human override / escalation rates tracked
- [ ] Canaries for prompt and model changes
- [ ] Evaluation set ownership documented like on-call

Published at: https://www.nabhilabs.com/resources/rag-evaluation-checklist
Contact: hello@nabhilabs.com
