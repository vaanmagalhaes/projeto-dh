import React from 'react';
import logo01 from '../assets/logo01.png';

const Aliados = () => {
    // A nossa base de dados definitiva de quem banca a luta
    const listaAliados = [
        { id: 1, nome: 'Senac RJ', img: logo01, url: 'https://www.rj.senac.br/' },
        // { id: 2, nome: 'Marca 2', img: 'https://via.placeholder.com/250x100.png?text=LOGO+2', url: '#' },
        // { id: 3, nome: 'Marca 3', img: 'https://via.placeholder.com/250x100.png?text=LOGO+3', url: '#' },
        // { id: 4, nome: 'Marca 4', img: 'https://via.placeholder.com/250x100.png?text=LOGO+4', url: '#' },
        // { id: 5, nome: 'Marca 5', img: 'https://via.placeholder.com/250x100.png?text=LOGO+5', url: '#' },
        // { id: 6, nome: 'Marca 6', img: 'https://via.placeholder.com/250x100.png?text=LOGO+6', url: '#' },
    ];

    const interceptarClique = (e, url) => {
        e.preventDefault(); // Trava o clique padrão do HTML
        const usuarioQuerSair = window.confirm("Atenção: Você está saindo do nosso manifesto para acessar a página desse aliado.\n\nBora lá?");
        if (usuarioQuerSair) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div style={{ padding: '3rem 1.5rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>

            <div style={{ marginBottom: '5rem' }}>
                <h1 className="zine-title-badge" style={{ backgroundColor: 'var(--zine-orange)', transform: 'rotate(1deg)', display: 'inline-block', marginBottom: '1.5rem' }}>
                    ALIADOS
                </h1>
                <br />
                <span style={{
                    fontWeight: '900',
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    borderBottom: '4px solid #000',
                    display: 'inline-block',
                    paddingBottom: '0.2rem',
                    transform: 'rotate(-1deg)'
                }}>
                    Quem banca a luta e faz acontecer
                </span>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                {listaAliados.map((aliado) => (
                    <a
                        key={aliado.id}
                        href={aliado.url}
                        onClick={(e) => interceptarClique(e, aliado.url)} /* A mágica acontece aqui */
                        style={{ display: 'block', width: '100%', textAlign: 'center', cursor: 'pointer' }}
                    >
                        <img
                            src={aliado.img}
                            alt={`Logo ${aliado.nome}`}
                            className="logo-aliado"
                        />
                    </a>
                ))}
            </div>

            <div style={{
                marginTop: '6rem',
                padding: '3rem 2rem',
                backgroundColor: '#f4f4f0',
                border: '4px solid #000',
                boxShadow: '8px 8px 0px var(--zine-purple)', /* Sombra dura brutalista */
                display: 'inline-block',
                width: '100%',
                maxWidth: '800px'
            }}>
                <h2 style={{ fontSize: '2.5rem', transform: 'rotate(-1deg)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                    QUER BANCAR O FRONT?
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    lineHeight: '1.4',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto'
                }}>
                    A gente não muda a história só com boa vontade. Se a sua marca, coletivo ou universidade quer fortalecer o corre e entrar pra nossa rede de aliados, a porta tá aberta.
                </p>

                {/* O 'mailto' já deixa o assunto do email pronto pra facilitar a vida do investidor */}
                <a
                    href="mailto:vaanmagalhaes@gmail.com?subject=Quero%20apoiar%20a%20linha%20de%20frente"
                    style={{ textDecoration: 'none' }}
                >
                    <button
                        className="zine-button"
                        style={{
                            backgroundColor: '#000',
                            color: '#fff',
                            transform: 'rotate(1deg)',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem'
                        }}
                    >
                        MANDAR UM SALVE!
                    </button>
                </a>
            </div>

        </div>
    );
};

export default Aliados;