import React from 'react';
import '../App.css';

const challenges = [
    {
        title: 'Velocity vs. Review Capacity',
        body: 'AI coding assistants deliver 3–5× more code per sprint. Every SSDLC gate — threat modeling, code review, SAST, pen testing — was calibrated to human-pace output. That contract is broken. More code, same number of reviewers, shallower review per PR.',
        tags: ['Code Velocity', 'Review Depth', 'Throughput'],
    },
    {
        title: 'Hallucination in Security-Critical Paths',
        body: 'LLMs generate plausible-looking cryptography, authentication, and deserialization code that contains subtle, non-obvious bugs. The code compiles, passes style checks, and looks reviewed. SAST tools trained on human-written bugs may not catch AI codegen failure modes.',
        tags: ['Cryptography', 'Auth Flows', 'LLM Hallucination'],
    },
    {
        title: 'Prompt Injection via Codebase Context',
        body: 'AI coding tools ingest your codebase, comments, READMEs, and dependency names as context. Attacker-controlled content in any of those surfaces can influence what the model suggests in adjacent code — a new attack vector with no established mitigation playbook.',
        tags: ['Prompt Injection', 'Context Poisoning', 'Attack Surface'],
    },
    {
        title: 'Accelerated Supply Chain Risk',
        body: 'Models suggest package names from training data. Developers install without the scrutiny they would apply to a human recommendation. Dependency confusion, typosquatting, and abandoned-maintainer attacks all benefit from this frictionless install pattern.',
        tags: ['Dependencies', 'Typosquatting', 'Dependency Confusion'],
    },
    {
        title: 'The Audit Gap',
        body: '"The AI wrote it" is not a traceable decision. Traditional code review assumes a human author who made intentional, explainable choices. AI-generated code dissolves that assumption — and with it, the accountability model most security reviews depend on.',
        tags: ['Auditability', 'Accountability', 'Traceability'],
    },
];

const responses = [
    {
        title: 'Spec-Driven Gates Before Codegen',
        body: 'Requirements, acceptance criteria, and threat considerations are written before any AI touches a keyboard. AI implements against the spec. The spec becomes the audit trail — not the commit history, which an AI can produce faster than any human can review.',
        tags: ['Spec-Driven Dev', 'Threat Modeling', 'Audit Trail'],
    },
    {
        title: 'AI-Aware Static Analysis',
        body: 'SAST tooling needs signatures tuned for AI codegen failure modes — not just patterns from human-written bugs. Security-sensitive areas (crypto primitives, auth flows, SQL construction, deserialization) warrant elevated scrutiny regardless of who or what authored the code.',
        tags: ['SAST', 'DAST', 'AI Codegen Patterns'],
    },
    {
        title: 'Provenance Tagging in CI',
        body: 'Pipelines should surface AI-assisted contributions so reviewers can calibrate their depth of scrutiny. The goal is not to block AI use — it is to route AI-generated code to reviewers who apply the right level of attention, rather than treating all PRs identically.',
        tags: ['CI/CD', 'Code Review', 'Review Routing'],
    },
    {
        title: 'Model Governance in Pipelines',
        body: 'Which models, which data, which prompt patterns are permitted in production workflows? This is a new category of access control. Treating AI models as unmanaged developer tools is the 2025 equivalent of shadow IT — convenient until something goes wrong.',
        tags: ['AI Governance', 'Access Control', 'Policy'],
    },
    {
        title: 'Reviewer Capacity Recalibration',
        body: 'If AI multiplies throughput, review capacity must scale proportionally — or smarter triage must compensate. AI-assisted review routing, test coverage gating, automated threat surface analysis. Human review bandwidth is now the critical bottleneck, not code output.',
        tags: ['Review Process', 'Capacity Planning', 'Triage'],
    },
];

const AISsdlc = () => {
    return (
        <section className="section" id="ai-ssdlc">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Perspective</div>
                    <h2 className="section-title">SSDLC in the Age of AI</h2>
                    <p className="section-description">
                        AI coding tools have decoupled code velocity from review capacity for the first time in the history of software delivery.
                        Every security gate in your SDLC was designed around a human typing at human speed.
                        That assumption no longer holds — and most engineering organisations haven't caught up yet.
                    </p>
                </div>
            </div>

            <div className="section-header" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
                <div>
                    <div className="section-kicker">What Broke</div>
                    <h3 className="section-title" style={{ fontSize: '1.4rem' }}>New Risks AI Introduces to the SDLC</h3>
                </div>
            </div>

            <div className="card-grid">
                {challenges.map((c) => (
                    <div className="card" key={c.title}>
                        <h3>{c.title}</h3>
                        <p>{c.body}</p>
                        <div className="tag-row">
                            {c.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-header" style={{ marginTop: '3rem', marginBottom: '1rem' }}>
                <div>
                    <div className="section-kicker">What To Do</div>
                    <h3 className="section-title" style={{ fontSize: '1.4rem' }}>The Adapted SSDLC</h3>
                </div>
            </div>

            <div className="card-grid">
                {responses.map((r) => (
                    <div className="card" key={r.title}>
                        <h3>{r.title}</h3>
                        <p>{r.body}</p>
                        <div className="tag-row">
                            {r.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginTop: '2.5rem', borderLeft: '3px solid var(--accent-color, #0066cc)' }}>
                <div className="section-kicker">In Practice</div>
                <h3>How I Approach This</h3>
                <p>
                    Across engagements I've applied spec-driven development as the primary control — requirements and threat
                    considerations exist before any AI model generates implementation code. The spec is reviewable by a human
                    before a single line is written; that is where security thinking belongs, not in post-hoc code review of
                    output a model produced in seconds.
                </p>
                <p>
                    Custom AI agents built on Azure OpenAI, Bedrock, and Vertex AI operate within defined, auditable boundaries.
                    AI coding assistant adoption across teams is treated as a toolchain governance decision — which models, which
                    data, which use cases are acceptable in which contexts — not an individual developer preference left unmanaged.
                </p>
                <p>
                    The cognitive load problem is real and underappreciated. When code volume requiring review exceeds human
                    attention bandwidth, quality gates quietly degrade. Addressing it means scaling review capacity, implementing
                    smarter triage, or constraining AI throughput to what the team can actually absorb — none of which happen
                    automatically, and all of which require deliberate engineering leadership.
                </p>
                <div className="tag-row" style={{ marginTop: '1rem' }}>
                    {['Azure OpenAI', 'Bedrock', 'Vertex AI', 'Spec-Driven Dev', 'AI Governance', 'Custom Agents', 'SAST/DAST', 'ISO 27001'].map(tag => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AISsdlc;
