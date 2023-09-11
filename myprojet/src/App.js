import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [newProduct, setNewProduct] = useState({
    id: '',
    product_name: '',
    price: '',
    image_url: '', // Champ pour l'URL de l'image
  });

  const handleCreateProduct = () => {
    axios.post('https://www.harmonystore01.com/api/get_All_products', newProduct)
      .then(response => {
        console.log('Nouveau produit créé avec succès :', response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la création du produit :', error);
      });
  };

  return (
    <div>
      <h1>Créer un nouveau produit :</h1>
      <input
        type="number"
        placeholder="ID"
        value={newProduct.id}
        onChange={e => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nom du Produit"
        value={newProduct.product_name}
        onChange={e => setNewProduct({ ...newProduct, product_name: e.target.value })}
      />
      {/* Laissez les champs de description et de catégorie vides */}
      <input
        type="text"
        placeholder="Prix"
        value={newProduct.price}
        onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
      />
    
      {/* Laissez le champ de matériau du produit vide */}
      <input
        type="text"
        placeholder="URL de l'image"
        value={newProduct.image_url}
        onChange={e => setNewProduct({ ...newProduct, image_url: e.target.value })}
      />
      <button onClick={handleCreateProduct}>Créer</button>
    </div>
  );
}

export default App;
