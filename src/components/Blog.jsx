import React from "react";
import BlogContainer from "./BlogContainer";
import { useState, useEffect } from "react"

const Blog = () => {

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
      <div className="Page-title">
        <h1> BLOG </h1>
        <br/>
      </div>
        <BlogContainer/>
      </>
      );
}
 
export default Blog;