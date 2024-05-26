import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';
import AddResImg from '../assets/images/add-res-img.png';
import { Link } from 'react-router-dom';

const AddResourceItemPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [iconFile, setIconFile] = useState(null);
  const [link, setLink] = useState('');

  const RESOURCE_URL = 'https://media-content.ccbp.in/website/react-assignment/add_resource.json';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !iconFile || !link) {
      toast.error('All fields are required!');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('icon', iconFile); 
      formData.append('link', link);

      const response = await fetch(RESOURCE_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add resource item');
      }
      setTitle('');
      setDescription('');
      setIconFile(null);
      setLink('');
      toast.success('Resource item added successfully!');
    } catch (error) {
      console.error('Error adding resource item:', error);
      toast.error('Failed to add resource item');
    }
  };

  return (
    <>
      <Header />
      <Link to="/resources" className="btn btn-light user-btn mx-3">
        Users
      </Link>
      <div className="container d-flex flex-column align-items-center">
        <div className="row w-100">
          <div className="col-lg-6 col-md-8 col-12 d-flex justify-content-center align-items-center">
            <div className="w-100">
              <h2 className="text-center mb-2">Add Resource Item</h2>
              <form onSubmit={handleSubmit} className="p-4 bg-light rounded">
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">Name</label>
                  <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-2">
                  <label htmlFor="link" className="form-label">Link</label>
                  <input type="text" className="form-control" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
                </div>
                <div className="mb-2">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-2">
                  <label htmlFor="iconFile" className="form-label">Icon</label>
                  <input type="file" className="form-control" id="iconFile" accept=".png, .jpg, .jpeg" onChange={(e) => setIconFile(e.target.files[0])} />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
              </form>
              <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar />
            </div>
          </div>
          <div className="col-lg-6 col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img className="img-fluid" src={AddResImg} alt="Add Resource" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddResourceItemPage;