function Home({ trainers, clients }) {

    const trainerInfo = trainers.map((tr) => <li key={tr.id}>
        {tr.name}  |  {tr.accepting_clients ? 'Currently Accepting Clients' : 'Not Accepting New Clients' }
    </li>)

    const clientInfo = clients.map((cl) => <li key={cl.id}>
        {cl.name}  |  <em>Age:</em> {cl.age}  |  <em>Trainer:</em> {cl.trainer.name}
    </li>)
    
    return(
        <div>
        <h2>Dashboard</h2>
        <h3>Trainer Info</h3>
        <p>{trainerInfo}</p>
        <h3>Client Info</h3>
        <p>{clientInfo}</p>
        </div>
    )
}

export default Home;