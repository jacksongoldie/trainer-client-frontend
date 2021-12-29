import TrainerCard from "./TrainerCard";

function Trainers({ trainers, updateClients }) {

    const trainerInfo = trainers.map((tr) => <TrainerCard trainer={tr} updateClients={updateClients} />)

    return(
        <div>
            <h2>{trainerInfo}</h2>
        </div>
        
    )
}

export default Trainers;