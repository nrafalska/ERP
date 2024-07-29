import * as React from 'react';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';
import api from '../api/api';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
