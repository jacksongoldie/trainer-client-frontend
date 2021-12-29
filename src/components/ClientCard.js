function ClientCard({ client }) {

    function handleTrainerUpdate(){
        console.log('inside handleTrainerupdate')
    }
    return(
        <div>
            <p>{client.name} <button onClick={handleTrainerUpdate}>x</button></p>
            

        </div>
    )
}

export default ClientCard;