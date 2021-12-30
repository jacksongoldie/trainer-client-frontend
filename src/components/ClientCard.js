function ClientCard({ client, onDelete, trainer, renderMe }) {

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
            <h2>{client.name} <button onClick={handleClientDelete}>x</button></h2>
            {renderMe && 
            <>
            <p><em>Age: {client.age}</em></p>
            <p><em>Trainer: {trainer}</em></p>
            </>}
        </div>
    )
}

export default ClientCard;