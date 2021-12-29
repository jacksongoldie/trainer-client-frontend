import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Trainers from './Trainers';
import Clients from './Client';

function App() {

  const [trainers, setTrainers] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/trainers`)
    .then(r => r.json())
    .then((trainers) => setTrainers(trainers))
    .catch(error => window.alert('Is server connected?'))
  }, [])

  function onUpdate(){
    console.log('in on update')
  }

  return (
   <div className='App'>
     <Header />
      <Route exact path='/'>
        <Home trainers={trainers}/> 
      </Route>
      <Route path='/trainers'>
        <Trainers trainers={trainers} updateClients={onUpdate} />
      </Route>
      <Route path='/clients'>
        <Clients />
      </Route>
   </div>
  )
}

export default App;
