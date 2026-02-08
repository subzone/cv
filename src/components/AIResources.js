import React from 'react';
import '../App.css';

const resourceData = [
    {
        name: 'github/awesome-copilot',
        url: 'https://github.com/github/awesome-copilot',
        stars: '20.5k',
        description: 'Official GitHub resource with community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.',
        tags: ['GitHub Copilot', 'Prompts', 'Instructions'],
    },
    {
        name: 'awesome-copilot-agents',
        url: 'https://github.com/Code-and-Sorts/awesome-copilot-agents',
        stars: '374',
        description: 'Curated list of GitHub instructions, prompts, skills, and agent markdown files for enhancing your GitHub Copilot AI experience.',
        tags: ['GitHub Copilot', 'AI Agents', 'Skills'],
    },
    {
        name: 'awesome-copilot-chatmodes',
        url: 'https://github.com/dfinke/awesome-copilot-chatmodes',
        stars: '304',
        description: 'Custom chatMode.md personas for GitHub Copilot - specialize your VS Code with AI assistants for testing, security, and clean-code refactoring.',
        tags: ['GitHub Copilot', 'Chat Modes', 'VS Code'],
    },
    {
        name: 'awesome-ai-coding-techniques',
        url: 'https://github.com/inmve/awesome-ai-coding-techniques',
        stars: '313',
        description: 'Practical techniques for coding with AI assistants including Claude Code, Codex CLI, Cursor, and GitHub Copilot.',
        tags: ['Multi-Platform', 'Best Practices', 'Techniques'],
    },
    {
        name: 'cc-switch',
        url: 'https://github.com/farion1231/cc-switch',
        stars: '16.8k',
        description: 'Cross-platform desktop All-in-One assistant tool for Claude Code, Codex, OpenCode & Gemini CLI with unified interface and skills management.',
        tags: ['Claude Code', 'Multi-Platform', 'Desktop App'],
    },
    {
        name: 'context-engineering-intro',
        url: 'https://github.com/coleam00/context-engineering-intro',
        stars: '12.3k',
        description: 'Context engineering guide - the modern way to work with AI coding assistants. Learn to provide the right context for better results.',
        tags: ['Claude Code', 'Context Engineering', 'Guide'],
    },
    {
        name: 'awesome-agent-skills',
        url: 'https://github.com/JackyST0/awesome-agent-skills',
        stars: '159',
        description: 'Curated AI Agent Skills collection for Cursor, Claude Code, GitHub Copilot and other AI programming tools.',
        tags: ['Skills', 'Multi-Platform', 'Agent Skills'],
    },
    {
        name: 'cursor-ai-tips',
        url: 'https://github.com/murataslan1/cursor-ai-tips',
        stars: '173',
        description: 'Cursor AI IDE tips, tricks & best practices including keyboard shortcuts, Composer mode, .cursorrules examples, and community wisdom.',
        tags: ['Cursor', 'Tips & Tricks', 'Best Practices'],
    },
    {
        name: 'awesome-q-developer',
        url: 'https://github.com/cremich/awesome-q-developer',
        stars: '163',
        description: 'Curated list of awesome things related to Amazon Q Developer including tools, tutorials, and integrations.',
        tags: ['Amazon Q', 'AWS', 'Resources'],
    },
    {
        name: 'prompt-manager',
        url: 'https://github.com/n-WN/prompt-manager',
        stars: '98',
        description: 'TUI tool to manage prompts from multiple AI coding assistants (Claude Code, Cursor, Codex, Aider, Amp, Gemini) in one place.',
        tags: ['Tool', 'Prompt Management', 'Multi-Platform'],
    },
    {
        name: 'awesome-android-agent-skills',
        url: 'https://github.com/new-silvermoon/awesome-android-agent-skills',
        stars: '263',
        description: 'Standardized Agent Skills to teach GitHub Copilot, Claude, Gemini and Cursor about modern Android development (Kotlin, Jetpack Compose).',
        tags: ['Android', 'Skills', 'Mobile Dev'],
    },
    {
        name: 'spec-driven-workflow',
        url: 'https://github.com/liatrio-labs/spec-driven-workflow',
        stars: '60',
        description: 'Lightweight markdown-based workflow for collaborating with AI coding assistants using spec-driven development methodology.',
        tags: ['Workflow', 'Methodology', 'Markdown'],
    },
];

const AIResources = () => {
    return (
        <section className="section" id="ai-resources">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Curated Collection</div>
                    <h2 className="section-title">AI Coding Assistant Resources</h2>
                    <p className="section-description">
                        A curated list of repositories with instructions, prompts, patterns, and best practices 
                        for working with AI coding assistants like GitHub Copilot, Claude Code, Cursor, and Amazon Q.
                    </p>
                </div>
            </div>

            <div className="card-grid">
                {resourceData.map((resource) => (
                    <div className="card" key={resource.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h3>
                                <a 
                                    href={resource.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ 
                                        textDecoration: 'none', 
                                        color: 'inherit',
                                        borderBottom: '2px solid var(--accent-color, #0066cc)',
                                    }}
                                >
                                    {resource.name}
                                </a>
                            </h3>
                            <span className="muted" style={{ fontSize: '0.9rem', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                                ⭐ {resource.stars}
                            </span>
                        </div>
                        <p>{resource.description}</p>
                        <div className="tag-row">
                            {resource.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AIResources;
