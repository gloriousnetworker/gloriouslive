import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaThumbsUp, FaThumbsDown, FaShareAlt, FaEdit, FaTrash } from 'react-icons/fa';

// Define the types
interface Comment {
  text: string;
  author: string;
  timestamp: Date;
}

interface Post {
  title: string;
  content: string;
  link: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  newComment: string;
  hasLiked: boolean;
  hasDisliked: boolean;
  showAllComments: boolean;
  author: string;
  timestamp: Date;
}

const Blog = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Understanding React Hooks',
      content: 'A comprehensive guide to React hooks and how they help manage state and lifecycle in functional components. This content is too long to show entirely in the card, hence we will only display a portion of it.',
      link: 'understanding-react-hooks',
      likes: 0,
      dislikes: 0,
      comments: [],
      newComment: '',
      hasLiked: false,
      hasDisliked: false,
      showAllComments: false,
      author: 'Glorious',
      timestamp: new Date()
    },
    {
      title: 'Introduction to TypeScript',
      content: 'Learn about TypeScript, a strongly typed programming language that builds on JavaScript, and its advantages.',
      link: 'introduction-to-typescript',
      likes: 0,
      dislikes: 0,
      comments: [],
      newComment: '',
      hasLiked: false,
      hasDisliked: false,
      showAllComments: false,
      author: 'Glorious',
      timestamp: new Date()
    },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [currentUser] = useState('Glorious');

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts).map((post: Post) => ({
        ...post,
        timestamp: new Date(post.timestamp),
        comments: post.comments.map((comment: Comment) => ({
          ...comment,
          timestamp: new Date(comment.timestamp)
        }))
      }));
      setPosts(parsedPosts);
    }
  }, []);

  const updatePostsInLocalStorage = (updatedPosts: Post[]) => {
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const formatTime = (timestamp: Date | undefined) => {
    if (!timestamp || !(timestamp instanceof Date) || isNaN(timestamp.getTime())) return 'Invalid date';

    const now = new Date();
    const timeDifference = now.getTime() - timestamp.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return 'Just Now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `Today at ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    if (days === 1) return `Yesterday at ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    return timestamp.toLocaleDateString();
  };

  const addPost = () => {
    const newPost: Post = {
      title: newTitle,
      content: newContent,
      link: newTitle.toLowerCase().replace(/\s+/g, '-'),
      likes: 0,
      dislikes: 0,
      comments: [],
      newComment: '',
      hasLiked: false,
      hasDisliked: false,
      showAllComments: false,
      author: currentUser,
      timestamp: new Date()
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    updatePostsInLocalStorage(updatedPosts);
    setNewTitle('');
    setNewContent('');
  };

  const handleEdit = (index: number) => {
    const postToEdit = posts[index];
    setNewTitle(postToEdit.title);
    setNewContent(postToEdit.content);
    setEditIndex(index);
  };

  const updatePost = () => {
    if (editIndex === null) return;
    const updatedPosts = [...posts];
    updatedPosts[editIndex] = {
      ...updatedPosts[editIndex],
      title: newTitle,
      content: newContent,
    };
    setPosts(updatedPosts);
    updatePostsInLocalStorage(updatedPosts);
    setNewTitle('');
    setNewContent('');
    setEditIndex(null);
  };

  const deletePost = (index: number) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    updatePostsInLocalStorage(updatedPosts);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault();
    const updatedPosts = [...posts];
    if (updatedPosts[index].newComment.trim()) {
      updatedPosts[index].comments.push({
        text: updatedPosts[index].newComment.trim(),
        author: currentUser,
        timestamp: new Date(),
      } as Comment);
      updatedPosts[index].newComment = '';
      setPosts(updatedPosts);
      updatePostsInLocalStorage(updatedPosts);
    }
  };

  const incrementLikes = (index: number) => {
    const updatedPosts = [...posts];
    if (updatedPosts[index].hasLiked) {
      updatedPosts[index].likes -= 1;
    } else {
      updatedPosts[index].likes += 1;
      if (updatedPosts[index].hasDisliked) {
        updatedPosts[index].dislikes -= 1;
        updatedPosts[index].hasDisliked = false;
      }
    }
    updatedPosts[index].hasLiked = !updatedPosts[index].hasLiked;
    setPosts(updatedPosts);
    updatePostsInLocalStorage(updatedPosts);
  };

  const incrementDislikes = (index: number) => {
    const updatedPosts = [...posts];
    if (updatedPosts[index].hasDisliked) {
      updatedPosts[index].dislikes -= 1;
    } else {
      updatedPosts[index].dislikes += 1;
      if (updatedPosts[index].hasLiked) {
        updatedPosts[index].likes -= 1;
        updatedPosts[index].hasLiked = false;
      }
    }
    updatedPosts[index].hasDisliked = !updatedPosts[index].hasDisliked;
    setPosts(updatedPosts);
    updatePostsInLocalStorage(updatedPosts);
  };

  const handleShare = (postLink: string) => {
    const postUrl = `${window.location.origin}/blog/${postLink}`;
    if (navigator.share) {
      navigator.share({
        title: 'My Blog',
        text: 'Check out this blog post!',
        url: postUrl,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(postUrl).then(() => {
        alert("Link copied to clipboard!");
      }).catch((error) => {
        console.log('Error copying link:', error);
      });
    }
  };



  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <button onClick={() => router.back()} className="flex items-center text-blue-500 mb-4 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">My Blog</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (editIndex === null) {
            addPost();
          } else {
            updatePost();
          }
        }} className="mb-8">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border p-2 w-full mb-2"
          />
          <textarea
            placeholder="Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="border p-2 w-full mb-2"
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {editIndex === null ? 'Add Post' : 'Update Post'}
          </button>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => {
            const snippet = post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content;

            return (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">{snippet}</p>
                <button onClick={() => router.push(`/blog/${post.link}`)} className="text-blue-500 hover:underline mt-2">
                  Read More...
                </button>

                <p className="text-gray-500 text-xs mt-2">By: {post.author} | {formatTime(post.timestamp)}</p>

                {/* Flex container for Like/Dislike/Share and Edit/Delete buttons */}
                <div className="flex items-center justify-between mt-4">

                  {/* Left-aligned Like, Dislike, and Share buttons */}
                  <div className="flex items-center space-x-3">
                    <button onClick={() => incrementLikes(index)} className="text-green-500 hover:text-green-700 flex items-center">
                      <FaThumbsUp /> <span className="ml-1">{post.likes}</span>
                    </button>
                    <button onClick={() => incrementDislikes(index)} className="text-red-500 hover:text-red-700 flex items-center">
                      <FaThumbsDown /> <span className="ml-1">{post.dislikes}</span>
                    </button>
                    <button onClick={() => handleShare(post.link)} className="text-blue-500 hover:text-blue-700 flex items-center">
                      <FaShareAlt />
                    </button>
                  </div>

                  {/* Right-aligned Edit and Delete buttons */}
                  {post.author === currentUser && (
                    <div className="flex space-x-2">
                      <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button onClick={() => deletePost(index)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </div>

                {/* Comment form and comments section */}
                <form onSubmit={(e) => handleCommentSubmit(e, index)} className="mt-4">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={post.newComment}
                    onChange={(e) => {
                      const updatedPosts = [...posts];
                      updatedPosts[index].newComment = e.target.value;
                      setPosts(updatedPosts);
                    }}
                    className="border p-2 w-full mb-2"
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Comment</button>
                </form>

                {post.comments.length > 0 && (
                  <div className="mt-4">
                    <button onClick={() => {
                      const updatedPosts = [...posts];
                      updatedPosts[index].showAllComments = !updatedPosts[index].showAllComments;
                      setPosts(updatedPosts);
                    }} className="text-blue-500 hover:underline mb-2">
                      {post.showAllComments ? 'Show Less' : 'Show All Comments'}
                    </button>
                    {(post.showAllComments ? post.comments : post.comments.slice(-3)).map((comment, i) => (
                      <p key={i} className="text-gray-600 text-sm mb-1">
                        {comment.text} <span className="text-gray-400 text-xs">({comment.author} - {formatTime(comment.timestamp)})</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );


          })}
        </div>
      </div>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Iniubong Udofot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
