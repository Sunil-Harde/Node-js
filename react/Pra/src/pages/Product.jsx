import React, { useEffect, useState } from "react";
import axios from "axios";
import { createProduct, getOneProduct, getProduct } from "../api/productApi";




function Product() {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState({

    "name": "samsung 15",
    "price": 90000,
    "category": "mobile",
    "stock": 100,

  });



  const fetchProducts = async () => {
    try {

      const data = await getProduct()
      // alert(data.message)
      setData(data.data)

    } catch (error) {
      console.log(error);
    }
  };

  const handelSubmit = async () => {

    const data = await createProduct(from)

    console.log(data);
    

  }

  



  const getProductId = async (id) => {

    console.log(id);


    const data = await getOneProduct(id)

    console.log(data);



  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-2">Product</h2>
        <p className="text-gray-600">Products list will appear here.</p>


        {
          data.map((value) => {

            return (

              <div key={value._id} className="flex gap-2">

                <h1>{value.name}</h1>
                <button onClick={() => getProductId(value._id)}>View</button>

              </div>
            )
          })
        }

        <button onClick={()=>handelSubmit()}>click</button>

      </div>
    </div>
  );
}

export default Product;