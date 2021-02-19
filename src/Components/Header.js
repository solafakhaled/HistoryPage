
import logo from "./images/logoFinal.png";
import HeaderItems from "./HeaderItems"
import{FaUserCircle}from 'react-icons/fa'
//Header contains and displays global tools and navigation.
const Header = ({title}) => {
//add constructors here if needed.
    return (

        <header  className='header' >
           <img  className= 'logoImg' src={logo} alt=''/>
         
           <FaUserCircle style={{color:'#f4f4f4'
           ,cursor:'pointer'
           ,marginLeft:'80%'
           ,marginRight:'20px'
           ,fontSize:'100px'
           ,marginBottom:'80px'
           ,position:'fixed'
           }}/>
           <label className='user'>Dr.Hind Mohammed</label>
             
           
        
             <ul className='menu'>
             
                 {HeaderItems.map((item,index)=>{
                     return(
                   <li key = {index}>
                        <a className={item.cName} href={item.link}>
                            {item.Name}

                        </a>
                        
                    </li>
                    )
                 })}
             </ul>
             
        </header>

    )
}


export default Header

//<img className = 'headerImg' src='/images/Navbar.jpg' alt=''/>