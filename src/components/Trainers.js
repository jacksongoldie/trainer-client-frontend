import TrainerCard from "./TrainerCard";

function Trainers({ trainers }) {

    const trainerInfo = trainers.map((tr) => <TrainerCard trainer={tr} />)

    return(
        <div>
            <h2>{trainerInfo}</h2>
        </div>
        
    )
}

export default Trainers;