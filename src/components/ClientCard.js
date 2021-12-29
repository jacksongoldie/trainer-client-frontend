function ClientCard({ client, onDelete }) {

    function handleClientDelete(){
        console.log('inside client delete')
        // const deleted = client;
        // debugger;

        fetch(`http://localhost:9292/clients/${client.id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(() => onDelete())
    }

    return(
        <div>
            <p>{client.name} <button onClick={handleClientDelete}>x</button></p>
            

        </div>
    )
}

export default ClientCard;