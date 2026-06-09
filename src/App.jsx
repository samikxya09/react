
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Error from "./components/error";


function App() {

  let  name ="samikxyaaaaaaa"
     
  return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/:id" element={<Error/>} />
       </Routes>
       </BrowserRouter>
  )
}

export default App;