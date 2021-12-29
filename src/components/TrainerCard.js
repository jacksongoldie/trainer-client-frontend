import ClientCard from "./ClientCard";
import AddClient from "./AddClient";
import { useState } from 'react';

function TrainerCard({trainer, updateClients, onDelete }){

    const [addingClient, setAddingClient] = useState(false);

    function handleAddClientFromTrainerCard(){
        addingClient ? 
        console.log('inside done adding') :
        console.log('inside addClient')
        setAddingClient((mUV) => !mUV)
    }

    function clients(){
        if (trainer.clients.length > 0 ){
            const clients = trainer.clients.map((client) => <ClientCard key={client.id} client={client} onDelete={onDelete} />)
            return clients;
        }
        else{
            return "no active clients"
        }
    }

    function acceptingClients(){
        if (trainer.accepting_clients === false){
            return "Trainer is not accepting new clients"
        }
        else{
            return addingClient ?
                <AddClient id={trainer.id} updateClients={updateClients} handleAddClientFromTrainerCard={handleAddClientFromTrainerCard} />
                :
                <button onClick={handleAddClientFromTrainerCard}> + Add Client </button>
            }
    }
    
    return(
        <div>
            <h1>{trainer.name}</h1>
            {acceptingClients()}
            <p>Clients:</p>
            {clients()}

        </div>
    )
}

export default TrainerCard;