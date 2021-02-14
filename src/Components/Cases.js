import Case from './Case'
const cases=[
    {id:1,
    text:'Case 1000',
    },
    {
        id:2,
        text:'Case 1100',
        },
    {
        id:3,
        text:'Case 1110',
            }]

const Cases = () => { 


    return (

        <>
          {cases.map((case1)=>(<h3 key ={case1.id} >{case1.text}</h3>))}
        </>
    )
}

export default Cases