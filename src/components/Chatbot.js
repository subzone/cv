import React from 'react';

function Chatbot() {
  return (
    <section className="section no-print" id="chatbot">
      <div className="section-header">
        <div>
          <div className="section-kicker">Experimental</div>
          <h2 className="section-title">Chatbot</h2>
        </div>
      </div>
      <iframe
        title="chatbot"
        src="https://webchat.botframework.com/embed/test-bot-mm?s=WAaBAgLtZ6Y.X3eeQDoUGFSA4G_ss_v50rZExCe2mddroL9Qxk2nDcg"
        style={{ width: '100%', height: '502px', maxHeight: '502px', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}
      />
    </section>
  );
}

export default Chatbot;