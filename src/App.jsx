import { useState, useEffect } from 'react'
import * as petService from "./services/petService"
import PetList from './components/PetList'

import './App.css'

function App() {
  const [petList, setPetList] = useState([])
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
  

  return (
    <>
      <PetList petList={petList}/>
    </>
  )
}

export default App
