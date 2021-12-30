import ClientCard from "./ClientCard";

function Clients({ clients, onDelete }) {
    
    const renderMe = true;
    
    return(
        <div>

            {clients.map((client) => <ClientCard client={client} renderMe={renderMe} trainer={client.trainer.name} key={client.id} onDelete={onDelete} />)}
        </div>
    )
}

export default Clients;