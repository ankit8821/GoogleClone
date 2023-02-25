
import './App.css';
import Home from "./Components/Home"
import Search from "./Components/Search";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
   
      <Routes>
   <Route path="/" element={<Home></Home>}> </Route>
   <Route path="/search" element={<Search></Search>} ></Route>

   </Routes>  
  );
}

export default App;
