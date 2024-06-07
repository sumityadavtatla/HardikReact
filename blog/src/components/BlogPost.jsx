import React from 'react';

function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-meta">Published on <time dateTime={post.date}>{new Date(post.date).toDateString()}</time> by {post.author}</p>
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <hr />
    </article>
  );
}

export default BlogPost;
