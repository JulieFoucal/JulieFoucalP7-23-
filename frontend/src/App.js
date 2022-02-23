import Header from './components/Header';
import Droite from './components/Droite';
import Gauche from './components/Gauche';
import Milieu from './components/Milieu';
import { Router } from 'express';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Droite/>
       <Gauche/>
       <Milieu/>
     </Router>
    </div>
  );
}

export default App;
