/*import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Card,ListGroup} from "react-bootstrap";

export default function Getproduct() {
    const [products,setProducts]=useState([]);
      useEffect(()=>{
       axios.get("https://www.harmonystore01.com/api/get_All_products")
       .then((res)=>{
          setProducts(res.data);
       })
      },[]);

  return (
    <div >
    {products.map(el=>(
        <Card style={{ width: '18rem' }} key={el.id} >
      <Card.Title>{el.product_name}</Card.Title>
      <Card.Img  src={el.image_url} />
      <Card.Body>
        <Card.Text>{el.created_at} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{el.category}  </ListGroup.Item>
        <ListGroup.Item> {el.Product_material}</ListGroup.Item>
        <ListGroup.Item> {el.description} </ListGroup.Item>
      </ListGroup>
    
    </Card>
    ))}

    </div>
  )
}
*/