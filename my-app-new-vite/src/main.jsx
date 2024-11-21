import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Starter from './starter.jsx'
import TestProps from './TestProps.jsx'
 
function testClick(){
  console.log("clicked button");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <App /> */}
    <Greeting name="Atharv" age={22}  />
    <Greeting name="Athv" age={22}  />
    <Greeting name="harv" age={22}  />
    {/* <Greeting /> */}
    <Starter/>
    <TestProps testClick={testClick}/>
    <Footer/>
  </StrictMode>,
)
