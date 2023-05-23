import React from 'react';

const BlogCard = ({blog}) => {
    const {author, title, subtitle, text, wordcount, date, image } = blog;
    console.log(blog)



    return ( 
        <>
        <div className='BlogCard'>

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{author}</h3>
        <img src={image}/>
        <p>{wordcount}</p>
        <p>{date}</p>
        <p>{text}</p>
        </div>
        </>
     );
}
 
export default BlogCard;