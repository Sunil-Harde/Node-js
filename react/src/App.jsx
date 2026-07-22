import { useState } from "react";
import axios from "axios";

function Product() {

  const [formData, setFormData] = useState({
    name: "",
    price: ""
  });

  const [image, setImage] = useState(null);

  const changeHandler = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const imageHandler = (e) => {

    setImage(e.target.files[0]);

  };

  const submitHandler = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", image);

    console.log(data);
    

    try {

      const response = await axios.post(
        "http://localhost:5000/api/product",
        data,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNjA5YTc4ZDVmNTFhM2QyNjdiNTExMCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzg0NzE5NzYzLCJleHAiOjE3ODQ3MjMzNjN9.B3nr8-nrz3K0EZNraQO9VIJ9IiUc6K6PXK0muO4nWtEeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhNjA5YTc4ZDVmNTFhM2QyNjdiNTExMCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzg0NzE5NzYzLCJleHAiOjE3ODQ3MjMzNjN9.B3nr8-nrz3K0EZNraQO9VIJ9IiUc6K6PXK0muO4nWtE`
          }
        }
      );

      console.log(response.data);

    } catch (err) {

      console.log(err.response?.data);

    }

  };

  return (

    <form onSubmit={submitHandler}>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={changeHandler}
      />

      <br /><br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={changeHandler}
      />

      <br /><br />

      <input
        type="file"
        accept="image/*"
        onChange={imageHandler}
      />

      <br /><br />

      <button type="submit">
        Create Product
      </button>

    </form>

  );
}

export default Product;