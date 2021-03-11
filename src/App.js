import Header from './Components/Header'
import Footer from './Components/Footer'
import Cases from './Components/Cases'
import Search from './Components/Search'
import {useState,useEffect} from 'react'
//setting the database config
import db from './db';
function id() 
{
    // Check to see if the counter has been initialized
    if ( typeof id.counter == 'undefined' ) 
    {
        // It has not... perform the initialization
        id.counter = 0;
    }

    // Do something stupid to indicate the value
    return ++id.counter
}
//App is the main calling component
//it rule is calling other components 
const App  = ()=> {
  //-----------------------------------------------
  //testing the database : 
  const[cases,setCase]=useState('');
  const handleOnChange=(e)=>{
        setCase(e.target.value);
  }
  //adding cases to the db
  const addCase=()=>{
    const caseRef=db.database().ref("cases");
    const case1={
          id:id(),
          userID:"user Who created the case",
          sex:"male",
          Description:"the case descriptoon",
          path:"Likely_Pathogenic",
          Variants:[{ID:"var1",Classification:"Likely-Pathogenic",SIFT:"0.5",AF:"0.003",Gene:"4556",Alt:"T",Ref:"TGGT",Rules:["rule1","rule2"]}
          ,{ID:"var2",Classification:"Pathogenic",SIFT:"0.4",AF:"0.001",Gene:"2346",Alt:"C",Ref:"T",Rules:["rule1"]}
          ,{ID:"var3",Classification:"Likely-Pathogenic",SIFT:"0.2",AF:"0.004",Gene:"6776",Alt:"ATGC",Ref:"T",Rules:["rule1","rule2"]}
          ]
    }
    caseRef.push(case1);

  }
//adding rules to the db
  function addRule(){
    const ruleRef=db.database().ref("rules");
    const rule1={
          id:id(),
          text:"MedGen:12234--> Likely-Pathogenic"
            
    }
    ruleRef.push(rule1);
  }
  addRule();
  users();
//adding users to the db
  function users(){
    const usersRef=db.database().ref("users");
    const user1={
          id:id(),
          Name:"Sulafah Abdulmannan Najjar",
          role:"Admin"
 
    }
    usersRef.push(user1);
  }

  //-----------------------------------------------
  //todo: Take set Case from AddCase Page
  //todo: Create the Delete Functions and tie it with the server (for Admin only)
  /*const[cases,setCase]=useState([
    {id:1,
      text:"Case",
    Num:"1000"
      },
      
      {
          id:2,
          text:"Case",
          "Num":"1100"
          },
      {
          id:3,
          text:"Case",
           Num:"1110"
              }
            ])
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
            <Header/>
    <div className="container">
 
     <Search onSubmit={SubmitSearch}/>
     {cases.length>0? (<Cases cases={cases} onClick={GotoCase} onSubmit= {SubmitSearch}/>):('There Are No Cases Yet')}
     
    </div>
    <Footer/>
  
  */

  //the calling for containers in the main page 
  return (
    <div>
        <input type="text" onChange={handleOnChange} value={cases}/>
        <button onClick={addCase}>Add</button> 
     </div>
  )
}

export default App
