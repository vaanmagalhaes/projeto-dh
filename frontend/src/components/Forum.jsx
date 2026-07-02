import React, { useState, useRef } from 'react';
import { postsIniciais } from '../data/postsIniciais';
import { validarEmail, resolverAutor } from '../utils/forum';
import FormularioPost from './FormularioPost';
import PostCard from './PostCard';

const Forum = () => {
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');
  const [respondendoPara, setRespondendoPara] = useState(null);
  const textareaRef = useRef(null);

  const [posts, setPosts] = useState(postsIniciais);

  const handlePostar = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      setErroEmail('O formato do e-mail é inválido.');
      return;
    }

    const userData = resolverAutor(email);

    const novoPost = {
      id: Date.now(),
      author: userData.name,
      role: userData.role,
      content: respondendoPara ? `-> @${respondendoPara}: ${novoConteudo}` : novoConteudo,
      time: 'Agora mesmo',
      color: userData.color,
      likes: 0,
    };

    setPosts([novoPost, ...posts]);
    setNovoConteudo('');
    setRespondendoPara(null);
    setErroEmail('');
  };

  const iniciarResposta = (author) => {
    if (!validarEmail(email)) {
      alert('Por favor, preencha um e-mail válido no formulário acima para poder responder.');
      return;
    }
    setRespondendoPara(author);
    setNovoConteudo(`@${author} `);
    textareaRef.current.focus();
  };

  const apoiarPost = (id) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
        <h1 className="zine-title-badge" style={{ transform: 'rotate(1deg)', backgroundColor: '#000', color: '#fff' }}>
          VOZ ATIVA / FÓRUM
        </h1>
      </div>

      <div className="grid-layout" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
        <FormularioPost
          email={email}
          setEmail={setEmail}
          erroEmail={erroEmail}
          novoConteudo={novoConteudo}
          setNovoConteudo={setNovoConteudo}
          respondendoPara={respondendoPara}
          textareaRef={textareaRef}
          onSubmit={handlePostar}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onApoiar={apoiarPost} onResponder={iniciarResposta} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
