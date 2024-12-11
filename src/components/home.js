import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="container-home">
      <header className="cabecalho-home">
        <h1>Maciel Variedades</h1>
        <input type="text" placeholder="Pesquisar" className="pesquisa-home" />
      </header>
      <section className="promocao-home">
        <h2>Black friday</h2>
        <p className="titulo-promocao">Ofertas relâmpago</p>
        <div className="imagem-promocao">
          <img src="/Whey-removebg-preview-removebg-preview.png" alt="Produto em promoção" />
        </div>
      </section>
      <section className="categorias-home">
        {[ 
          { nome: 'Notebooks', imagem: '/note-removebg-preview.png' },
          { nome: 'Mouse', imagem: '/image.png' },
          { nome: 'Fones', imagem: '/fone.webp' },
          { nome: 'Monitores', imagem: '/61aIuJu0M0L.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png' },
        ].map((categoria, index) => (
          <div key={index} className="categoria-home">
            <img src={categoria.imagem} alt={categoria.nome} />
            <p>{categoria.nome}</p>
          </div>
        ))}
      </section>
      <section className="melhores-ofertas-home">
  <h2>Melhores ofertas</h2>
  <div className="grade-ofertas-home">
    {[
      { nome: 'Notebook Gamer Acer Nitro V', imagem: '/note-removebg-preview.png', descricao: 'Modelo: ANV15-51-57WS' },
      { nome: 'Mouse Gamer HAVIT', imagem: '/image.png', descricao: 'Modelo: HV-MS1001' },
      { nome: 'Fone Gamer Havit', imagem: '/fone.webp', descricao: 'Modelo: HV-H2232d' },
      { nome: 'Monitor Gamer LG', imagem: '/61aIuJu0M0L.__AC_SX300_SY300_QL70_ML2_-removebg-preview.png', descricao: 'Modelo: UltraGear 24' },
    ].map((produto, index) => (
      <div key={index} className="oferta-home">
        <div className="caixa-oferta-home">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default Home;