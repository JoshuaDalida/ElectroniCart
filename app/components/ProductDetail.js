

function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.imageURL && <img src={product.imageURL} alt={product.name} />}
    </div>
  );
}

export default ProductDetail;