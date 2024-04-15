
import Link from 'next/link';

const Product = ({ product }) => {
  return (
    <div className="m-3 w-60 bg-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={`product/${product.id}`}>
        {product.imageURL && (
          <div className="h-48 overflow-hidden">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-60 h-48 bg-white object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <div className="p-4 h-28">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
          <p className="text-gray-700 truncate">Price: ${product.price}</p>
        </div>
      </Link>
    </div>

  );
};

export default Product;
