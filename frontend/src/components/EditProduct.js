import React, { useEffect, useState } from 'react';
import {
  Link,
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const updateProduct = async e => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/products/${id}`, {
      title: title,
      price: price,
    });
    history.push('/');
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:8080/products/${id}`);
    console.log(response);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div>
      <Link to="/add" className="button is-primary mt-5 mr-2">
        Add New
      </Link>
      <Link to="/" className="button is-primary mt-5">
        Porduct List
      </Link>

      <h1 className="title is-1">Edit Product</h1>
      <form onSubmit={updateProduct}>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
