import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

interface Post {
  title: string;
  content: string;
  link: string;
}

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  // Load post data from localStorage based on slug
  useEffect(() => {
    if (slug) {
      const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      if (savedPosts) {
        const foundPost = savedPosts.find((post: Post) => post.link === slug);
        if (foundPost) {
          setPost(foundPost);
        }
      }
    }
  }, [slug]);

  if (!post) {
    return <div className="text-center mt-8 text-xl">Post not found!</div>;
  }

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-500 mb-4 hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">{post.content}</p>

        <button
          onClick={scrollToTop}
          className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Top
        </button>
      </div>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Iniubong Udofot. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
