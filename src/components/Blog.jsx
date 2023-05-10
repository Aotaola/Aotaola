import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([])

  const fetchblog = async() => {
    const req = await fetch("https://medium.com/@alejelias")
    const res = await req.json()

    setBlog(res)
    console.log(res)
  }
  useEffect(() =>{
    fetchblog()
  },[])
    return (
      <>
      <div className="Page-title">
        <h1> BLOG </h1>
      </div>
      </>
      );
}
 
export default Blog;