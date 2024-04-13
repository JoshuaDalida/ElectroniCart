

const Product = ({ product }) => {
  return (
    <div className="m-3">
      {product.imageURL && <img src={product.imageURL} alt={product.name} />}
      <h2 className="text-gray-600">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price}</p>
    </div>
  );
 };
 export default Product;
