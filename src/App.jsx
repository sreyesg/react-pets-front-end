import { useState, useEffect } from 'react'
import * as petService from "./services/petService"
import PetList from './components/PetList'
import PetDetails from './components/PetDetails'
import './App.css'
import PetForm from './components/PetForm'

function App() {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  useEffect(()=>{
    const fetchPets = async() => {
      try {
        const pets = await petService.index()
        if(pets.error){
          throw new Error(pets.error)
        }
        setPetList(pets)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPets()
  },[])
  
  const updateSelected = (pet) => {
    setSelected(pet)
  }

  const handleFormView = (pet) => {
    if(!pet.name) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }
  const handleAddPet = async(formData) => {
    try {
      const newPet = await petService.create(formData)
      if(newPet.error){
        throw new Error(newPet.error)
      }
  
      setPetList([newPet, ...petList])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleUpdatePet = async(formData, petId) => {
    try {
      const updatedPet = await petService.update(formData, petId)
      if(updatedPet.error){
        throw new Error(updatedPet.error)
      }
  
      const updatedPetList = petList.map((pet) => pet._id !== updatedPet._id ? pet:updatedPet)
      setPetList(updatedPetList)
      setSelected(updatedPet)
      setIsFormOpen(false)
      
    } catch (error) {
      console.log(error)
    }

  }



  // MAIN RETURN CONTEXT
  return (
    <>
      <PetList 
      petList={petList} 
      updateSelected={updateSelected}
      handleFormView={handleFormView}
      isFormOpen={isFormOpen}
      />
      {isFormOpen ? (<PetForm handleAddPet={handleAddPet} selected={selected} handleUpdatePet={handleUpdatePet}/>):(<PetDetails selected={selected} handleFormView={handleFormView}/>)}
      
    </>
  )
}

export default App
