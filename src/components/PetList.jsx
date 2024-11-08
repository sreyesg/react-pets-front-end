const  PetList = (props) =>  {
    
    const pets = props.petList.map((pet)=> <li key={pet._id}>{pet.name}</li>)
    return(
        <div>
        <h1>Pet List</h1>
        <ul>{pets}</ul>
        </div>
    )
}

export default PetList