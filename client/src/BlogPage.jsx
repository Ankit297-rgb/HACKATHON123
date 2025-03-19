import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Css/BlogPage.css'; // Ensure you have this CSS file for styling
import Navbar from './Navbar';

function BlogPage({ username }) {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [image, setImage] = useState(null);
  const [editBlogId, setEditBlogId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editPost, setEditPost] = useState('');
  const [editImage, setEditImage] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [likedBlogs, setLikedBlogs] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [showCommentsId, setShowCommentsId] = useState(null);
  const [activePostId, setActivePostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/login');
      return;
    }

    const loadedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const sortedBlogs = loadedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    setBlogs(sortedBlogs);
    setFilteredBlogs(sortedBlogs);

    const liked = JSON.parse(localStorage.getItem('likedBlogs')) || [];
    setLikedBlogs(new Set(liked));
  }, [username, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || post.trim() === '') {
      alert('Title and post content cannot be empty.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newBlog = {
        id: Date.now(),
        title,
        post,
        author: username,
        imageUrl: reader.result,
        likes: 0,
        likedBy: [],
        comments: [],
        date: new Date().toLocaleString(),
        edited: false, // Initial flag for edited
      };

      const updatedBlogs = [newBlog, ...blogs];
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

      setTitle('');
      setPost('');
      setImage(null);
      setShowCreateForm(false);
    };

    if (image) {
      reader.readAsDataURL(image);
    } else {
      reader.onloadend();
    }
  };

  const handleLike = (id) => {
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === id) {
        const likedBy = blog.likedBy || [];
        const hasLiked = likedBy.includes(username);
        const updatedLikedBy = hasLiked
          ? likedBy.filter(user => user !== username)
          : [...likedBy, username];

        return {
          ...blog,
          likedBy: updatedLikedBy,
          likes: updatedLikedBy.length,
        };
      }
      return blog;
    });

    setBlogs(updatedBlogs);
    setFilteredBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    const updatedLikedBlogs = updatedBlogs.flatMap(blog =>
      blog.likedBy.includes(username) ? [blog.id] : []
    );
    localStorage.setItem('likedBlogs', JSON.stringify(updatedLikedBlogs));
    setLikedBlogs(new Set(updatedLikedBlogs));
  };

  const handleCommentSubmit = (id) => {
    if (commentText.trim()) {
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === id) {
          return {
            ...blog,
            comments: [{ author: username, text: commentText }, ...blog.comments],
          };
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      setCommentText('');
    } else {
      alert('Please enter a comment text.');
    }
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    setFilteredBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    if (blogToEdit) {
      setEditBlogId(id);
      setEditTitle(blogToEdit.title);
      setEditPost(blogToEdit.post);
      setEditImage(blogToEdit.imageUrl);
    }
  };

  const handleCancelUpdate = () => {
    setEditBlogId(null);
    setEditTitle('');
    setEditPost('');
    setEditImage(null);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === editBlogId) {
          return {
            ...blog,
            title: editTitle,
            post: editPost,
            imageUrl: reader.result || blog.imageUrl,
            date: new Date().toLocaleString(),
            edited: true, // Mark the blog as edited
          };
        }
        return blog;
      });

      setBlogs(updatedBlogs);
      setFilteredBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

      setEditBlogId(null);
      setEditTitle('');
      setEditPost('');
      setEditImage(null);
    };

    if (editImage) {
      reader.readAsDataURL(editImage);
    } else {
      reader.onloadend();
    }
  };

  const handleSearch = () => {
    const searchLower = searchTerm.toLowerCase();
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchLower) || blog.author.toLowerCase().includes(searchLower)
    );
    setFilteredBlogs(filtered);
  };

  const handleToggleComments = (id) => {
    setShowCommentsId(showCommentsId === id ? null : id);
  };

  const toggleOptions = (id) => {
    setActivePostId(activePostId === id ? null : id);
  };

  return (
    <div>
      <Navbar user={username} />

      <div className="container9">
        <div className="intro-section">
          <h1>Welcome to Our Cultural and Heritage Blog</h1>
          <p>Explore our blog to delve into the rich tapestry of cultural traditions and heritage...</p>
        </div>

        <button
          className="create-post-btn"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : 'Create Your Own Post'}
        </button>

        {showCreateForm && (
          <form id="blog-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder="Write your post here..."
              required
            ></textarea>

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
            <button type="submit">Post</button>
          </form>
        )}

        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or author"
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div id="blogs-container" className="blogs-container">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="blog-post">
              {blog.author === username && (
                <div className="three-dots-menu1">
                  <button className="three" onClick={() => toggleOptions(blog.id)}>...</button>
                  {activePostId === blog.id && (
                    <div className="edit-delete-options">
                      <button className="edit" onClick={() => handleEdit(blog.id)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(blog.id)}>Delete</button>
                    </div>
                  )}
                </div>
              )}
              
              {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="blog-image" />}
              <h3>{blog.title}</h3>
              <p>{blog.post}</p>
              <p><i>Posted by {blog.author} on {blog.date}</i> {blog.edited && <span className="edited-tag">(Edited)</span>}</p>

              <div className="like-section">
                <button className="liksec"
                  onClick={() => handleLike(blog.id)}
                >
                  {likedBlogs.has(blog.id) ? 'Unlike' : 'Like'} ({blog.likes})
                </button>
              </div>

              <div className="comment-section">
                <button className="comsec" onClick={() => handleToggleComments(blog.id)}>
                  {showCommentsId === blog.id ? 'Hide' : 'Comments'} ({blog.comments.length})
                </button>

                {showCommentsId === blog.id && (
                  <>
                    <div className="comments-list">
                      {blog.comments.map((comment, index) => (
                        <div key={index} className="comment">
                          <strong>{comment.author}:</strong> {comment.text}
                        </div>
                      ))}
                    </div>
                    <div className="comment-form">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Add a comment..."
                      ></textarea>
                      <button onClick={() => handleCommentSubmit(blog.id)}>Submit Comment</button>
                    </div>
                  </>
                )}
              </div>
              
              {editBlogId === blog.id && (
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Title"
                    required
                  />
                  <textarea
                    value={editPost}
                    onChange={(e) => setEditPost(e.target.value)}
                    placeholder="Write your post here..."
                    required
                  ></textarea>
                  <input
                    type="file"
                    onChange={(e) => setEditImage(e.target.files[0])}
                    accept="image/*"
                  />
                  <button className="update" type="submit">Update Post</button>
                  <button className="update" type="button" onClick={handleCancelUpdate}>Cancel</button>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;