import React from "react";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([])

  const fetchblog = async() => {
    const req = await fetch("http://127.0.0.1:4000/blogs/")
    const res = await req.json()

    setBlogs(res)
    console.log(res)
  }
  useEffect(() =>{
    fetchblog()
  },[])
  
    return (
        <>
        <div className="BlogContainer">
          <br/>
          <h1> this is a blog container </h1>

        {blogs.map((blog) => {
          return (
            <BlogCard key= {blog.id} blog={blog} />
            )
          })
        }
        <BlogCard/>
        </div>
        </>
      );
}
 
export default BlogContainer;