import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import LogINPage from "./Pages/LogINPage.jsx";

function App() {

  return (
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='signin' element={<SignInPage/>}/>
          <Route path='login' element={<LogINPage/>}/>
      </Routes>
  )
}



export default App
