// src/components/PetForm.jsx

import { useState } from 'react';

const PetForm = (props) => {
  // formData state to control the form
  const intialState = {
    
        name: '',
        age: '',
        breed: '',
      
  }
  
  const [formData, setFormData] = useState(intialState);

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddPet(formData)
    setFormData(intialState)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
