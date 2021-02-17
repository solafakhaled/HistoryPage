import Header from './Components/Header'
import Footer from './Components/Footer'
import Cases from './Components/Cases'
import Search from './Components/Search'
import {useState,useEffect} from 'react'
//App is the main calling component
//it rule is calling other components 
const App = ()=>{

  //todo: Take set Case from AddCase Page
  //todo: Create the Delete Functions and tie it with the server (for Admin only)
  const[cases,setCase]=useState([])
//function to fetch cases from the database using json, 
//it awaits for a promise using async
//the function currently uses a console log to show actions, must tie it with AddPage database
useEffect(()=>{
 const getCases=async()=>{
   const ServerCases = await fetchCase()
   setCase(ServerCases)
 }
 getCases()
},[])
//Fetch the tasks from the database
const fetchCase=async () =>{
  const res = await fetch('http://localhost:3004/cases')
  const data=await res.json()
  console.log(data)
  return data
}
  //function for taking input from the search form
  const SubmitSearch=(aCase)=>{
       
    //todo:see how you can let user fetch from all the database(doesn't delete it)
        setCase(aCase===''? setCase(cases): cases.filter((getCases)=>getCases.Num===aCase))
        
  }
  //function to navigate to the case page with the givin id
  const GotoCase= (id)=>{
    //this change later to tie with specific case 
    console.log('Go to the case :',id);
  }

  //the calling for containers in the main page 
  return (
    <div>
          <Header/>
    <div className="container">
 
     <Search onSubmit={SubmitSearch}/>
     {cases.length>0? (<Cases cases={cases} onClick={GotoCase} onSubmit= {SubmitSearch}/>):('There Are No Cases Yet')}
     

    </div>
    <Footer/>
     </div>
  )
}

export default App
