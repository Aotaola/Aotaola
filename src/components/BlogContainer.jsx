import React from "react";
import { useState, useEffect } from "react";

const BlogContainer = () => {

    const [blog, setBlog] = useState([])

  const fetchblog = async() => {
    const req = await fetch("http://127.0.0.1:3000/blogs/")
    const res = await req.json()

    setBlog(res)
    console.log(res)
  }
  useEffect(() =>{
    fetchblog()
  },[])

    return (
        <>
        </>
      );
}
 
export default BlogCOntainer;