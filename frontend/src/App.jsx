import { BrowserRouter,Routes,Route } from "react-router-dom";
import { NewStudents } from "./pages/NewStudents";
import { User } from "./pages/User";
function App(){
  return(
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/newStudent" element={<NewStudents/>} />
      <Route path="/user" element={<User/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;