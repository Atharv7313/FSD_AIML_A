import {Routes,  Route } from 'react-router-dom'
import Counter from './components/Counter'
const App=()=>{
  return(
    <div className="">
<Routes>
  <Route path="/counter" element={<Counter/>}></Route>
  <Route path="/" element={<h1>Home page</h1>}></Route>
  <Route path="/login" element={<h2>LOGIN</h2>}></Route>
  <Route path="/logout" element={<h2>LOGOUT</h2>}></Route>
  <Route path="*" element={<h2>No such page available</h2>}></Route>
</Routes>
</div>
  )
}


// export default App
export {App}    //new way