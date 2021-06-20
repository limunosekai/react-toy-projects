import React, { useState } from 'react';
import './markdown.css';
import ReactMarkdown from 'react-markdown';

function Markdown() {
  const [markdown, setMarkdown] = useState('### Markdown Preview 🍄');
  return (
    <main className='markdown-section'>
      <section className='markdown'>
        <textarea
          className='markdown-input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='markdown-result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default Markdown;
