import './App.css';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rr from './screens/Rr';
import AddRr from './screens/AddRr';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path='/rr' element={<Rr />} />
         <Route path='/addrr' element={<AddRr />} />
         <Route path="/edit-rr/:id" element={<AddRr />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
