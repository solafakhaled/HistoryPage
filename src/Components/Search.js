import{FaSearch}from 'react-icons/fa'
 import {useState} from 'react'
 //returns the input from the user to filter based on it 
const Search = ({onSubmit}) => {
    const [text,setText]=useState('')
    //handling submitted input from user
    const onSubmits=(e)=>{
        e.preventDefault()

        if(!text){
            onSubmit('-1')
            return
        }
        //if there is a text, send it to onSubmit
        onSubmit(text)

    }
    return (
        //create input and form,set the styles
        <form className='add-form' onSubmit={onSubmits}    >
           <div className='form-control'>
               <label><FaSearch
           style={{color:'gray',cursor:'pointer'}}
          
           /></label>
        <input  type='text' placeholder= 'Search For A Case'
               onChange={(e)=>setText(e.target.value)} 
               value ={text}/>
               </div> 
        </form>
    )
}

export default Search
