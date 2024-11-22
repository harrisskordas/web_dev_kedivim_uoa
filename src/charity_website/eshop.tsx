import './eshop.css';
import image1 from '../assets/Screenshot 2024-11-22 at 10.49.41 PM.png';
import image2 from '../assets/Screenshot 2024-11-22 at 10.49.54 PM.png';
import image3 from '../assets/Screenshot 2024-11-22 at 10.50.05 PM.png';
import image4 from '../assets//Screenshot 2024-11-22 at 10.50.13 PM.png';

const EShop = () => {
  // Array of products with their images and random prices
  const products = [
    { id: 1, image: image1, price: (Math.random() * 50 + 10).toFixed(2) },
    { id: 2, image: image2, price: (Math.random() * 50 + 10).toFixed(2) },
    { id: 3, image: image3, price: (Math.random() * 50 + 10).toFixed(2) },
    { id: 4, image: image4, price: (Math.random() * 50 + 10).toFixed(2) },
  ];

  return (
    <div className="eshop">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
            <div className="product-info">
              <p>Price: €{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EShop;
