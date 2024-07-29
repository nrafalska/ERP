import React from 'react';
import './eBayPostsPage.css';
import api from '../api/api';

interface Post {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const EbayPostsPage: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get<Post[]>('/ebay-posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="ebay-posts-page">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img src={post.imageUrl} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EbayPostsPage;
