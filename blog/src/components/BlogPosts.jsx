import React from 'react';
import BlogPost from './BlogPost';

function BlogPosts({ posts }) {
  return (
    <main className="blog-posts">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </main>
  );
}

export default BlogPosts;
