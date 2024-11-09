const  PetList = (props) =>  {
    
    const pets = props.petList.map((pet)=> (
        <a key={pet._id} onClick={()=> props.updateSelected(pet)}>
            <li >{pet.name}</li>
        </a>

    ))
    
    return(
        <div>
        <h1>Pet List</h1>
        {pets.length === 0 ? <h2>No pets Yet!</h2>:<ul>{pets}</ul>}
        <button onClick={props.handleFormView}>{props.isFormOpen ? 'close Form':'Add New'}</button>
        </div>
        
    )
}

export default PetList