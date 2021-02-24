import Case from './Case'
//create array of cases, using use state to update it later
const Cases = ({cases, onClick,onSubmit}) => { 

    return (
       //In the Cases array each index contains an object case
       //Using map function to loop through cases
       //هنا يلف على الكيسس كلها 

        <>
          {cases.map((case1)=>
          (<Case key ={case1.id} case1={case1} onClick={onClick} onSubmit={onSubmit}/>))}
         
        </>
    )
}

export default Cases