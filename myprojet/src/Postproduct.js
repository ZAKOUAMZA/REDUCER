/*import axios from 'axios';
import React, { useState } from 'react'

export default function Postproduct() {
    const [poste,setPoste]=useState({
        id:'',
        product_name:'',
        price:'',
        description:'',
        image_url:""
    });
 
    const handleCreateProduct = () =>{
        axios.post("https://www.harmonystore01.com/api/get_All_products",poste)
        .then(res =>{
            setPoste("vous avez creer un nouveau produit ",res.data );
        })
        
    }
  return (
    <div>
     <input
        type='number'
        placeholder='n° de ID'
        value={poste.id}
        onChange={e =>setPoste({...poste, id: e.target.value})}
     />
    <input
        type='text'
        placeholder='nom du produit'
        value={poste.product_name}
        onChange={e =>setPoste({...poste,product_name: e.target.value})}
    />
     
    <input
        type="number"
        placeholder="Prix"
        value={poste.price}
        onChange={e => setPoste({ ...poste, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        value={poste.description}
        onChange={e => setPoste({ ...poste, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="image_url"
        value={poste.image_url}
        onChange={e => setPoste({ ...poste, image_url: e.target.value })}
      />
      <button onClick={handleCreateProduct}>Creer</button>
    </div>
  )
}
*/