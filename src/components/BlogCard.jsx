import React from 'react';

const BlogCard = ({blog}) => {
    // const {author, title, subtitle, text, wordcount, date, image } = blog;
    console.log(blog)



    return ( 
        <>
        <div className='BlogCard'>
        {/* <h1>This is a blog CARD!</h1>

        <h1>{blog.title}</h1>
        <h2>{blog.subtitle}</h2>
        <h3>{blog.author}</h3>
        <img src={blog.image}/>
        <p>{blog.wordcount}</p>
        <p>{blog.date}</p>
        <p>{blog.text}</p> */}
        </div>
        </>
     );
}
 
export default BlogCard;