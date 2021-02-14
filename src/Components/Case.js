import{FaExternalLinkAlt}from 'react-icons/fa'
//handling each case object, adding an icon from fontawsome
const Case = ({case1,onClick}) => {
    return (
        <div className='task'>
           <h3>{case1.id}{' | '}{case1.text}{' '}
           <FaExternalLinkAlt
           style={{color:'gray',cursor:'pointer'}}
           onClick={() => onClick (case1.id)}
           />
            
           </h3>
        </div>
    )
}

export default Case
