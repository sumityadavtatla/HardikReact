import React from 'react';
import BlogPost from './BlogPost'


const blogPostsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
}
function BlogPosts({ posts }) {
  return (
    <main style = {blogPostsStyle}>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post}/>
      ))}
    </main>
  );
}

export default BlogPosts;
