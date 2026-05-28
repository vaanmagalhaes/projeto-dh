import React, { useState, useRef } from 'react';

const Forum = () => {
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');
  const [respondendoPara, setRespondendoPara] = useState(null); // Estado para controlar a resposta
  const textareaRef = useRef(null); // Referência para focar no campo de texto

  const [posts, setPosts] = useState([
    { id: 1, author: 'ANÔNIMO_42', role: 'ATIVISTA', content: 'A censura na arte urbana está crescendo na zona sul.', time: '2h atrás', color: 'var(--zine-purple)', likes: 0 },
    { id: 2, author: 'SISTEMA_OFF', role: 'ESTUDANTE', content: 'Alguém tem o contato da assessoria jurídica da Casa 1?', time: '5h atrás', color: 'var(--zine-orange)', likes: 0 }
  ]);

  const roleMap = {
    'vaanmagalhaes@email.com': { name: 'Vaan', role: 'VISIONÁRIO', color: 'var(--zine-green)' },
    'teste@email.com': { name: 'Usuário', role: 'REBELDE', color: 'var(--zine-orange)' },
    'johnnysoares@email.com': { name: 'Johnny', role: 'REVOLUCIONÁRIO', color: 'var(--zine-purple)' },
    'gabrielasilva@email.com': { name: 'Gabriela', role: 'VOZ DO FUTURO', color: 'var(--zine-yellow)' }
  };

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handlePostar = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      setErroEmail('O formato do e-mail é inválido.');
      return;
    }

    const userData = roleMap[email] || { name: email.split('@')[0], role: 'PARTICIPANTE', color: '#000' };

    const novoPost = {
      id: Date.now(),
      author: userData.name,
      role: userData.role,
      // Se estiver respondendo, adicionamos a menção no conteúdo
      content: respondendoPara ? `-> @${respondendoPara}: ${novoConteudo}` : novoConteudo,
      time: 'Agora mesmo',
      color: userData.color,
      likes: 0
    };

    setPosts([novoPost, ...posts]);
    setNovoConteudo('');
    setRespondendoPara(null);
    setErroEmail('');
  };

  const iniciarResposta = (author) => {
    if (!validarEmail(email)) {
      alert("Por favor, preencha um e-mail válido no formulário acima para poder responder.");
      return;
    }
    setRespondendoPara(author);
    setNovoConteudo(`@${author} `);
    textareaRef.current.focus(); // Foca no campo de texto automaticamente
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      {/* Cabeçalho */}
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', backgroundColor: '#000', color: '#fff' }}>VOZ ATIVA / FÓRUM</h1>
      </div>

      <div className="grid-layout" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
        {/* Formulário */}
        <div className="zine-card" style={{ backgroundColor: 'var(--zine-yellow)', transform: 'rotate(-1deg)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            {respondendoPara ? `RESPONDENDO A @${respondendoPara}:` : 'MANDAR A REAL:'}
          </h2>
          <form onSubmit={handlePostar}>
            <input
              type="email"
              placeholder="SEU E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '1rem', border: 'var(--border-thick)', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1rem', outline: 'none' }}
            />
            {erroEmail && <p style={{ color: 'var(--zine-orange)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase' }}>{erroEmail}</p>}
            
            <textarea
              ref={textareaRef}
              value={novoConteudo}
              onChange={(e) => setNovoConteudo(e.target.value)}
              placeholder="O que tá acontecendo na sua rua?"
              style={{ width: '100%', minHeight: '120px', padding: '1rem', border: 'var(--border-thick)', boxShadow: '4px 4px 0px 0px #000', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '1rem', resize: 'vertical', marginBottom: '1rem', outline: 'none' }}
            />
            <button type="submit" className="zine-button" style={{ backgroundColor: '#000', color: '#fff' }}>
              {respondendoPara ? 'PUBLICAR RESPOSTA' : 'PUBLICAR MANIFESTO'}
            </button>
          </form>
        </div>

        {/* Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          {posts.map((post) => (
            <article key={post.id} className="zine-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: 'var(--border-thick)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontWeight: '900', fontSize: '1.2rem' }}>{post.author}</span>
                  <span style={{ backgroundColor: post.color, color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', padding: '0.2rem 0.5rem', marginLeft: '0.5rem' }}>{post.role}</span>
                </div>
              </div>
              <p style={{ fontWeight: '500', fontSize: '1.1rem', lineHeight: '1.5' }}>{post.content}</p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <button onClick={() => setPosts(posts.map(p => p.id === post.id ? {...p, likes: p.likes + 1} : p))} style={{ background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>↑ APOIAR ({post.likes})</button>
                <button onClick={() => iniciarResposta(post.author)} style={{ background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>RESPONDER</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;