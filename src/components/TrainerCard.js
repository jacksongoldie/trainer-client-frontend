import ClientCard from "./ClientCard";

function TrainerCard({trainer}){

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
            <p>Clients:</p>
            {clients()}

        </div>
    )
}

export default TrainerCard;