import Case from './Case'


//create array of cases, using use state to update it later
const Cases = ({cases, onClick}) => { 

    return (
       //usin map to loop through cases in the cases return
        <>
          {cases.map((case1)=>
          (<Case key ={case1.id} case1={case1} onClick={onClick}/>))}
         
        </>
    )
}

export default Cases