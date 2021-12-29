function Home({ trainers }) {

    const trainerInfo = trainers.map((tr) => <li>
        {tr.name} || {tr.accepting_clients ? 'Currently Accepting Clients' : 'Not Accepting New Clients' }
    </li>)

    // const clientInfo = clients.map((cl) => <li>
    //     {cl.name}  |  {cl.age}  |  {cl.trainer}
    // </li>)
    
    return(
        <div>
        <h2>Dashboard</h2>
        <h3>Trainer Info</h3>
        <p>{trainerInfo}</p>
        {/* <h3>Client Info</h3>
        <p>{clientInfo}</p> */}
        </div>
    )
}

export default Home;