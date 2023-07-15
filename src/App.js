import {  Route ,Routes} from 'react-router';
import Navbar from './components/navbar/navbar'
import Home from './components/homepage/homepage';
import Login from './components/login/login';
import Signup from './components/signup/signup';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
       <Route exact path="/Home" element={<Home />} />
       <Route exact path="/Login" element={<Login />}></Route>
       <Route exact path="/Signup" element={<Signup />}></Route>
       </Routes>
    </div>
  );
}

export default App;
