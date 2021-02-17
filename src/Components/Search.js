 import {useState} from 'react'
 //returns the input from the user to filter based on it 
const Search = ({onSubmit}) => {
    const [text,setText]=useState('')
    //handling submitted input from user
    const onSubmits=(e)=>{
        e.preventDefault()

        if(!text){
            onSubmit(' ')
            return
        }
        //if there is a text, send it to onSubmit
        onSubmit(text)

    }
    return (
        //create input and form,set the styles
        <form className='add-form' onSubmit={onSubmits}    >
           <div className='form-control'>
               
               <label>Search in Cases History</label>
               <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <input className='fa' type='text' placeholder='&#xF002; Search... '
               onChange={(e)=>setText(e.target.value)} 
               value ={text}/>
               </div> 
               
        </form>
    )
}

export default Search
