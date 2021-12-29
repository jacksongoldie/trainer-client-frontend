import { useState } from 'react';

function AddClient(){

    const update = {
        name: "",
        age: ""
    }
    const [formData, setFormData] = useState(update)

    function handleSubmit(e){
        e.preventDefault();
        debugger;
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Client first name..." name="name" value="name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddClient;