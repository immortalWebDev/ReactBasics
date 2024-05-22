import React, { createContext, useState} from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://react-http-api-ae8f7-default-rtdb.firebaseio.com/blogs.json');
      if (response.data) {
        console.log('response data from server after GET: ',response.data)
        const keys = Object.keys(response.data);
        const blogs = keys.map(key => {
          const blog = response.data[key];
          return { ...blog, id: key };
        });
        setBlogs(blogs);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleAddBlog = async (newBlog) => {
    try {
      const response = await axios.post('https://react-http-api-ae8f7-default-rtdb.firebaseio.com/blogs.json', newBlog);
      console.log('response data from server after POST: ',response.data)
      const createdBlog = { ...newBlog, id: response.data.name };
      setBlogs((prevBlogs) => [...prevBlogs, createdBlog]);
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      console.log("Clicked delete")
      await axios.delete(`https://react-http-api-ae8f7-default-rtdb.firebaseio.com/blogs/${id}.json`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

 

  const handleEditBlog = async (id, updatedBlog) => {
    try {
      await axios.put(`https://react-http-api-ae8f7-default-rtdb.firebaseio.com/blogs/${id}.json`, updatedBlog);
      setBlogs((prevBlogs) => prevBlogs.map((blog) => (blog.id === id ? { ...updatedBlog, id } : blog)));
    } catch (error) {
      console.error('Error editing blog:', error);
    }
  };

  return (
    <BlogContext.Provider value={{
      blogs,
      setBlogs,
      isModalOpen,
      setIsModalOpen,
      selectedBlog,
      setSelectedBlog,
      handleAddBlog,
      handleDeleteBlog,
      handleEditBlog,
      fetchBlogs
    }}>
      {children}
    </BlogContext.Provider>
  );
};
