import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Css/BlogPage.css';

function BlogPage({ username }) {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [author, setAuthor] = useState(username || '');
    const [image, setImage] = useState(null);
    const [editBlogId, setEditBlogId] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [likedBlogs, setLikedBlogs] = useState(new Set()); 
    const navigate = useNavigate();

    useEffect(() => {
        const loadedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        const sortedBlogs = loadedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);

        const liked = JSON.parse(localStorage.getItem('likedBlogs')) || [];
        setLikedBlogs(new Set(liked));
    }, []);

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
                author: username,  // Use the username passed from Login
                imageUrl: reader.result,
                likes: 0,
                likedBy: [],
                comments: [],
                date: new Date().toLocaleString(),
            };

            const blogExists = blogs.some(blog => blog.title === newBlog.title && blog.post === newBlog.post);
            if (blogExists) {
                alert('A post with the same title and content already exists.');
                return;
            }

            const updatedBlogs = [newBlog, ...blogs];
            setBlogs(updatedBlogs);
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

            setTitle('');
            setPost('');
            setAuthor(username || '');
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
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

        const updatedLikedBlogs = updatedBlogs.flatMap(blog =>
            blog.likedBy.includes(username) ? [blog.id] : []
        );
        localStorage.setItem('likedBlogs', JSON.stringify(updatedLikedBlogs));
        setLikedBlogs(new Set(updatedLikedBlogs));
    };

    const handleCommentSubmit = (id) => {
        if (commentText) {
            const updatedBlogs = blogs.map(blog => {
                if (blog.id === id) {
                    return {
                        ...blog,
                        comments: [...blog.comments, { author: username, text: commentText }],
                    };
                }
                return blog;
            });
            setBlogs(updatedBlogs);
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

            setCommentText('');
        } else {
            alert('Please enter a comment text.');
        }
    };

    const handleDelete = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    return (
        <div className="container9">
            <button 
                className="back-to-home"
                onClick={() => navigate('/home')}
            >
                Back to Home Page
            </button>
            <h1>Blog Posting Website</h1>

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
                        type="text"
                        value={author}
                        readOnly
                    />
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/*"
                    />
                    <button type="submit">Post</button>
                </form>
            )}

            <div id="blogs-container" className="blogs-container">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-post">
                        {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" className="blog-image" />}
                        <h2>{blog.title}</h2>
                        <p>{blog.post}</p>
                        <p><i>by {blog.author}</i></p>
                        <p><small>{blog.date}</small></p>
                        <div className="likes-comments">
                            <button
                                className="like-btn"
                                onClick={() => handleLike(blog.id)}
                            >
                                {blog.likedBy.includes(username) ? 'Unlike' : 'Like'} ({blog.likes})
                            </button>
                            <button
                                className="comment-btn"
                                onClick={() => setEditBlogId(blog.id)}
                            >
                                Comment
                            </button>
                            {/* Delete button now visible for everyone */}
                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(blog.id)}
                            >
                                Delete
                            </button>
                        </div>
                        {editBlogId === blog.id && (
                            <div className="comment-section">
                                <textarea
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Write your comment..."
                                />
                                <button
                                    onClick={() => handleCommentSubmit(blog.id)}
                                >
                                    Submit Comment
                                </button>
                                <div className="comments-list">
                                    {blog.comments.map((comment, index) => (
                                        <div key={index} className="comment">
                                            <p><strong>{comment.author}</strong>: {comment.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
