import React from 'react';

const PostCard = ({ post, onApoiar, onResponder }) => (
  <article className="zine-card" style={{ padding: '1.5rem' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 'var(--border-thick)',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
      }}
    >
      <div>
        <span style={{ fontWeight: '900', fontSize: '1.2rem' }}>{post.author}</span>
        <span
          style={{
            backgroundColor: post.color,
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            padding: '0.2rem 0.5rem',
            marginLeft: '0.5rem',
          }}
        >
          {post.role}
        </span>
      </div>
    </div>

    <p style={{ fontWeight: '500', fontSize: '1.1rem', lineHeight: '1.5' }}>{post.content}</p>

    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
      <button onClick={() => onApoiar(post.id)} className="forum-link-button">
        ↑ APOIAR ({post.likes})
      </button>
      <button onClick={() => onResponder(post.author)} className="forum-link-button">
        RESPONDER
      </button>
    </div>
  </article>
);

export default PostCard;
