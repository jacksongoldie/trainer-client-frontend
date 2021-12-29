import { useState } from 'react';

function AddClient({ id, updateClients, handleAddClientFromTrainerCard }){

    const blankForm = {
        name: "",
        age: ""
    }
    const [formData, setFormData] = useState(blankForm)

    function handleOnChange(e){
        let name = e.target.name;
        let value = e.target.value;

        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        const submitData = {...formData, "trainer_id": id}
        debugger;
        fetch(`http://localhost:9292/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
        .then(r => r.json())
        .then((data) => updateClients(data))
        setFormData(blankForm)
    }
    return(
        <div>
            <button onClick={handleAddClientFromTrainerCard}> - Done Adding </button>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Client first name..." name="name" value={formData.name} onChange={handleOnChange} />
                <input type="text" placeholder="Client's age" name="age" value={formData.age} onChange={handleOnChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddClient;