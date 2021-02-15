import Header from './Components/Header'
import Cases from './Components/Cases'
import Search from './Components/Search'
import {useState} from 'react'
//App is the main calling component
//it is responsable of calling other components 
const App = ()=>{
  const[cases,setCase]=useState([])
  //function for taking input from the search form
  const SubmitSearch=(acase)=>{
    //the function currently displays only on the console,
    // it should filter later
        console.log(acase)

  }
  //fucntion to navigate to the case page with the givin id
  const GotoCase= (id)=>{
    //this change later to tie with specific case 
    console.log('Go to the case :',id);
  }
  //the calling for containers in the main page 
  return (
    <div className="container">
     <Header/>
     <Search onSubmit={SubmitSearch}/>
     {cases.length>0? (<Cases cases={cases} onClick={GotoCase}/>):('There Are No Cases Yet')}
    </div>

  )
}

export default App
