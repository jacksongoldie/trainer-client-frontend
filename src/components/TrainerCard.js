import ClientCard from "./ClientCard";
import AddClient from "./AddClient";
import { useState } from 'react';

function TrainerCard({trainer, onUpdate, onDelete }){

    const [addingClient, setAddingClient] = useState(false);

    function handleAddClientFromTrainerCard(){
        addingClient ? 
        console.log('inside done adding') :
        console.log('inside addClient')
        setAddingClient((mUV) => !mUV)
    }

    function handleChangeAcceptingClients(){
        fetch(`http://localhost:9292/trainers/${trainer.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {accepting_clients: !trainer.accepting_clients} )
        })
        .then(r => r.json())
        .then((data) => onUpdate(data))
    }

    function clients(){
        if (trainer.clients.length > 0 ){
            const clients = trainer.clients.map((client) => <ClientCard key={client.id} client={client} onDelete={onDelete} />)
            return clients;
        }
        else{
            return "currently has no active clients"
        }
    }

    function acceptingClients(){
        if (trainer.accepting_clients === false){
            return "Trainer is not accepting new clients"
        }
        else{
            return addingClient ?
                <AddClient id={trainer.id} onUpdate={onUpdate} handleAddClientFromTrainerCard={handleAddClientFromTrainerCard} />
                :
                <button onClick={handleAddClientFromTrainerCard}> + Add Client </button>
            }
    }
    
    return(
        <div>
            <h1>{trainer.name}<button onClick={handleChangeAcceptingClients}>{trainer.accepting_clients   ?'✅':'❌'}</button></h1>
            {acceptingClients()}
            <p>Clients:</p>
            {clients()}

        </div>
    )
}

export default TrainerCard;