
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className="m-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={`product/${product.id}`}>
        {product.imageURL && (
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-700">Price: ${product.price}</p>
        </div>
      </Link>
    </div>

  );
};

export default Product;
