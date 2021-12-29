function Home({ trainers }) {

    const trainerInfo = trainers.map((tr) => <li key={tr.id}>
        {tr.name} || {tr.accepting_clients ? 'Currently Accepting Clients' : 'Not Accepting New Clients' }
    </li>)
    
    return(
        <div>
        <h2>Dashboard</h2>
        <h3>Trainer Info</h3>
        <p>{trainerInfo}</p>
        </div>
    )
}

export default Home;