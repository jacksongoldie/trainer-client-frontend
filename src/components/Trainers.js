import TrainerCard from "./TrainerCard";

function Trainers({ trainers, onUpdate, onDelete }) {

    const trainerInfo = trainers.map((tr) => <TrainerCard key={tr.id} trainer={tr} onUpdate={onUpdate} onDelete={onDelete}/>)

    return(
        <div>
            <h2>{trainerInfo}</h2>
        </div>
        
    )
}

export default Trainers;