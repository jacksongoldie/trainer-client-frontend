import TrainerCard from "./TrainerCard";

function Trainers({ trainers, updateClients, onDelete }) {

    const trainerInfo = trainers.map((tr) => <TrainerCard key={tr.id} trainer={tr} updateClients={updateClients} onDelete={onDelete}/>)

    return(
        <div>
            <h2>{trainerInfo}</h2>
        </div>
        
    )
}

export default Trainers;