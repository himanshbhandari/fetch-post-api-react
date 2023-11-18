import './App.css'
import Form from './components/Form'
import DisplayData from './components/DisplayData'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  
  return (
    <div>
        {/* <Form setPincode={setPincode}/> */}
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route element={<PrivateRoute/>}>
            <Route path='/display' element={<DisplayData/>}/>
        </Route>
      </Routes>
        
    </div>
  )
}

export default App