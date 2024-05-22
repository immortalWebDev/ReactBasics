import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BlogContext } from './context/BlogContextProvider';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, setIsModalOpen, selectedBlog, handleEditBlog ,handleAddBlog} = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setImageUrl(selectedBlog.imageUrl);
      setDescription(selectedBlog.description);
    } else {
      setTitle('');
      setImageUrl('');
      setDescription('');
    }
  }, [selectedBlog]);

  const handleNewBlog = () => {
    
    const newBlog = { title, imageUrl, description };
    if (selectedBlog) {
      handleEditBlog(selectedBlog.id, newBlog);
    } else {
      handleAddBlog(newBlog);
    }
    setIsModalOpen(false);
  };

  const modalContent = (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{selectedBlog ? 'Edit Blog' : 'Add Blog'}</h3>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <div className="modal-buttons">
          <button onClick={handleNewBlog} style={{ marginRight: "10px" }}>{selectedBlog ? 'Save' : 'Add'}</button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );

  return isModalOpen ? ReactDOM.createPortal(modalContent, document.getElementById('modal-root')) : null;
};

export default Modal;
