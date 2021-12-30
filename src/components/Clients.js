import ClientCard from "./ClientCard";

function Clients({ clients, onDelete }) {
    
    return(
        <div>
            {clients.map((client) => <ClientCard client={client} key={client.id} onDelete={onDelete} />)}
        </div>
    )
}

export default Clients;