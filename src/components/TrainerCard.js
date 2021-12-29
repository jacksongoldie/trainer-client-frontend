import ClientCard from "./ClientCard";
import AddClient from "./AddClient";
import { useState } from 'react';

function TrainerCard({trainer, updateClients}){

    const [addingClient, setAddingClient] = useState(false);

    function handleAddClientFromTrainerCard(){
        console.log('inside addClient')
        setAddingClient((mUV) => !mUV)
    }

    function clients(){
        if (trainer.clients.length > 0 ){
            const clients = trainer.clients.map((client) => <ClientCard key={client.id} client={client} />)
            return clients;
        }
        else{
            return "no clients"
        }
    }
    
    return(
        <div>
            <h1>{trainer.name}</h1>
            {addingClient ?
            <AddClient id={trainer.id} updateClients={updateClients}/>
            :
            <button onClick={handleAddClientFromTrainerCard}> + Add Client </button> }

            <p>Clients:</p>
            {clients()}

        </div>
    )
}

export default TrainerCard;