import background from "./images/h2.jpg";
import logo from "./images/logoFinal.png";
import HeaderItems from "./HeaderItems"
//Header contains and displays global tools and navigation.
const Header = ({title}) => {
//add constructors here if needed.
    return (

        <header  className='header' >
           <img  className= 'logoImg' src={logo} alt=''/>
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