const PetDetails = (props) => {
    
    if(!props.selected){
        return(
            <h2>NO DETAILS</h2>        
        )
    }
    
    return(
        <>
        <h1>{props.selected.name}</h1>    
        <h2>Breed: {props.selected.breed}</h2>
        <h2>
            Age: {props.selected.age} year{props.selected.age <1 ? 's':''}
        </h2>
        </>
    )
    
}
export default PetDetails