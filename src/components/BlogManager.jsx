import React, { useContext, useEffect } from "react";
import { BlogContext } from "./context/BlogContextProvider";
import Modal from "./Modal";

const BlogManager = () => {
  const {
    blogs,
    isModalOpen,
    setIsModalOpen,
    setSelectedBlog,
    handleDeleteBlog,
    setBlogs ,
    fetchBlogs,
    handleAddBlog,
  } = useContext(BlogContext);

  useEffect(() => {
    fetchBlogs(); 
  }, []);

 
  const handleEditClick = (blog) => {
    console.log("cliked edit")
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>Total blogs: {blogs.length}</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setSelectedBlog(null);
        }}
      >
        Add Blog
      </button>
      {isModalOpen && <Modal/>}
      <hr />
      <div>
      <h3>All Blogs</h3>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h4>{blog.title}</h4>
            <div>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                style={{ width: "250px", height: "250px" }}
              />
              <p>{blog.description}</p>
            </div>
            <div>
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>{" "}
              <button onClick={() => handleEditClick(blog)}>Edit</button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default BlogManager;
