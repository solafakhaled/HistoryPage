import{FaSearch}from 'react-icons/fa'
 import {useState} from 'react'
 //search component takes input from user and filters the 
 //case list based on it 
const Search = ({onSubmit}) => {
    const [text,setText]=useState('')
    const onSubmits=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please Enter A Case')
            return
        }
        onSubmit(text)
        setText('')
    }
    return (
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
