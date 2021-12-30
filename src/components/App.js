import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Trainers from './Trainers';
import Clients from './Clients';

function App() {

  const [trainers, setTrainers] = useState([]);
  const [clients, setClients] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/trainers`)
    .then(r => r.json())
    .then((trainers) => setTrainers(trainers))
    .catch(error => window.alert('Is server connected?'))

    fetch(`http://localhost:9292/clients`)
    .then(r => r.json())
    .then((clients) => setClients(clients))
    .catch(error => window.alert('Is server connected?'))
  }, [refresh])

  function onUpdate(data){
    console.log(data)
    setRefresh((mUV) => !mUV)
  }

  function onDelete(){
    setRefresh((mUV) => !mUV)
  }

  return (
   <div className='App'>
     <Header />
      <Route exact path='/'>
        <Home trainers={trainers} clients={clients} /> 
      </Route>
      <Route path='/trainers'>
        <Trainers trainers={trainers} onUpdate={onUpdate} onDelete={onDelete} />
      </Route>
      <Route path='/clients'>
        <Clients clients={clients} onDelete={onDelete} />
      </Route>
   </div>
  )
}

export default App;
