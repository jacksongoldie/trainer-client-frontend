import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Trainers from './Trainers';
import Clients from './Client';

function App() {

  const [trainers, setTrainers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/trainers`)
    .then(r => r.json())
    .then((trainers) => setTrainers(trainers))
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
        <Home trainers={trainers}/> 
      </Route>
      <Route path='/trainers'>
        <Trainers trainers={trainers} updateClients={onUpdate} onDelete={onDelete} />
      </Route>
      <Route path='/clients'>
        <Clients />
      </Route>
   </div>
  )
}

export default App;
