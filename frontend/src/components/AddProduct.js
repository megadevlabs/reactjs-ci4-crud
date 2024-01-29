import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();

  const saveProduct = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/products', {
      title: title,
      price: price,
    });
    history.push('/');
  };

  return (
    <div>
      <Link to="/add" className="button is-primary mt-5 mr-2">
        Add New
      </Link>
      <Link to="/" className="button is-primary mt-5">
        Porduct List
      </Link>

      <h1 className="title is-1">Add New Product</h1>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title?"
          />
        </div>

        <div className="field">
          <label className="label">Price</label>
          <input
            type="text"
            name="price"
            className="input"
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Price?"
          />
        </div>

        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
