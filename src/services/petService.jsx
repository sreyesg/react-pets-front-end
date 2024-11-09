const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async() => {
    try {
        const res = await fetch(BASE_URL)
        return res.json()
        // return res.json()
    } catch (error) {
        console.log(error)
    }
}

const create = async(formData) => {
    try {
        const res = await fetch(BASE_URL,{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
            })

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const update = async(formData, petId) => {
    
    try {
        const res = await fetch(`${BASE_URL}/${petId}`, {
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)    
        })
        return res.json()

    } catch (error) {
        console.log(error)       
    }
}

const deletePet = async(petId) => {
    try {
        const res = await fetch(`${BASE_URL}/${petId}`,{
            method: 'DELETE'
        })
        return res.json()

    } catch (error) {
        console.log(error)
    }
}

export {
    index,
    create,
    update,
    deletePet
}