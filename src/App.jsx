import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { createContext,useState } from 'react'
import Home from './pages/Home'
import Beach from './pages/Beach'
import QuestionPaper from './components/QuestionPaper'
import './App.css'
export const ProfileProvider = createContext();
/* Profile Provider*/

function App() {
  const [changeDisplay2,setChangeDisplay2] = useState("0");
  return (
   <div>
    <ProfileProvider.Provider value={{changeDisplay2,setChangeDisplay2}}>
      <BrowserRouter>
        <Routes>
          <Route Index element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/media" element={<Beach/>}></Route>
          <Route path="/qps" element={<QuestionPaper/>}></Route>
        </Routes>
      </BrowserRouter>
      </ProfileProvider.Provider>
   </div>
  )
}

export default App
