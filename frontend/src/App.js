import data from "./data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Troca INSAna</a>
      </header>
      <main>
        <h1>Em destaque</h1>
        <div className="products">
          {
            data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} widht="250px" height="250px" />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p className="product-info_name">{product.name}</p>
                  </a>
                  <p className="product-info_desc">{product.description}</p>
                  <p className="product-info_email">E-mail para troca abaixo:</p>
                  <strong>{product.email}</strong>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
