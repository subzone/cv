import React from 'react';

const PipelineDiagram = () => {
  return (
    <section className="section" id="pipeline">
      <div className="section-label-row">
        <span className="section-label">CI / CD</span>
        <span className="section-num">—</span>
      </div>
      <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Deployment Pipeline</h2>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.45, marginBottom: '3rem', letterSpacing: '0.01em' }}>
        Live pipeline powering this site — not a diagram, this is the actual infrastructure.
      </p>

      <div className="pipe-wrap">

        {/* ── Source ── */}
        <div className="pipe-row pipe-row--center">
          <div className="pipe-node pipe-node--source">
            <span className="pipe-node-label">LOCAL DEV</span>
            <code>git push origin master</code>
          </div>
        </div>

        <div className="pipe-connector pipe-connector--down" />

        {/* ── Trigger ── */}
        <div className="pipe-row pipe-row--center">
          <div className="pipe-node pipe-node--trigger">
            <span className="pipe-node-label">GITHUB ACTIONS</span>
            <code>on: push &#8594; auto &nbsp;|&nbsp; workflow_dispatch &#8594; manual</code>
          </div>
        </div>

        {/* ── Branch connector ── */}
        <div className="pipe-branch-bar">
          <div className="pipe-branch-line pipe-branch-line--left" />
          <div className="pipe-branch-line pipe-branch-line--right" />
        </div>

        {/* ── Two paths ── */}
        <div className="pipe-paths">

          {/* AUTO path */}
          <div className="pipe-path">
            <div className="pipe-path-badge pipe-path-badge--auto">AUTO · every push</div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">DOCKER BUILD</span>
              <code>multi-stage · nginx:alpine</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">GHCR PUSH</span>
              <code>ghcr.io/subzone/cv:latest</code>
              <code className="pipe-dim">+ :sha short tag</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">HELM DEPLOY</span>
              <code>kubectl &#8594; K8s cluster</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node pipe-node--dest">
              <span className="pipe-node-label">LIVE</span>
              <code>milenko.myk8s.pp.ua</code>
            </div>
          </div>

          {/* MANUAL path */}
          <div className="pipe-path">
            <div className="pipe-path-badge pipe-path-badge--manual">MANUAL · controlled promotion</div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">NPM BUILD</span>
              <code>npm run build &#8594; /build</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">S3 SYNC</span>
              <code>aws s3 sync &#8594; 2 buckets</code>
              <code className="pipe-dim">eu-central-1 · --delete</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-node">
              <span className="pipe-node-label">CLOUDFRONT INVALIDATION</span>
              <code>/* &nbsp;&#8594;&nbsp; 2 distributions</code>
            </div>
            <div className="pipe-connector pipe-connector--down" />
            <div className="pipe-dest-split">
              <div className="pipe-node pipe-node--dest">
                <span className="pipe-node-label">LIVE</span>
                <code>mymilenko.info</code>
              </div>
              <div className="pipe-node pipe-node--dest">
                <span className="pipe-node-label">LIVE</span>
                <code>mymilenko.com</code>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PipelineDiagram;
