 import {useState} from 'react'
 //returns the input from the user to filter based on it 
const Search = ({onSubmit}) => {
    const [text,setText]=useState('')
    //handling submitted input from user
    const onSubmits=(e)=>{
        e.preventDefault()

       //this function is going to be passed to the onChange sent to the app 
       //text is the same as cases in the app
        onSubmit(text)
        
    }
    return (
        //create input and form,set the styles
        <form className='add-form' onSubmit={onSubmits}    >
           <div className='form-control'>
               
               <label className='label'>Search in Cases History</label>
               <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <input className='fa' type='text' placeholder='&#xF002; Search... '
               onChange={(e)=>setText(e.target.value)} 
               value ={text}/>
               </div> 
               
        </form>
    )
}

export default Search
