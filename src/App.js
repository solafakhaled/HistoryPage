import Header from './Components/Header'
import Cases from './Components/Cases'
import Search from './Components/Search'
import {useState,useEffect} from 'react'
//App is the main calling component
//it rule is calling other components 
const App = ()=>{

  //todo: see what you meant by setCase
  const[cases,setCase]=useState([])
//function to fetch cases from the database using json, 
//it awaits for a promise using async
//the function currently uses a console log to show actions, must tie it with AddPage database
useEffect(()=>{
  const fetchCase=async () =>{
    const res = await fetch('http://localhost:3004/cases')
    const data=await res.json()
    console.log(data)
  }
fetchCase()
},[])

  //function for taking input from the search form
  const SubmitSearch=(acase)=>{
    //the function currently displays only on the console,
    // it should filter later
        console.log(acase)

  }
  //function to navigate to the case page with the givin id
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
