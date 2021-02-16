import{FaExternalLinkAlt}from 'react-icons/fa'
//handling each case object, adding an icon from FA
const Case = ({case1,onClick,onSubmit}) => {
    return (
        <div className='task'>
           <h3>{case1.id}{' | '}{'Case'}{' '}{case1.Num}
           <FaExternalLinkAlt
           style={{color:'gray',cursor:'pointer'}}
           onClick={() => onClick (case1.id)}
           onSubmit={() => onSubmit (case1.id)}
           />
            
           </h3>
        </div>
    )
}

export default Case
