import {BrowserRouter, Route, Routes} from "react-router-dom";
// import NavigationGlobal from "./Components/Navbar/NavigationGlobal.jsx";
import Home from "./pages/Home.jsx";
import Intro from "./pages/Intro.jsx";

function App() {
  
  return (
    <BrowserRouter>
      {/*<NavigationGlobal />*/}
      
      <Routes>
        <Route path="/2024-year-end" element={<Home />}/>
        <Route path="/2024-year-end/intro" element={<Intro />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
