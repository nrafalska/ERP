import * as React from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import './ProductDetailsPage.css';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-page">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
