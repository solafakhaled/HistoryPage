import background from "./images/h2.jpg";
import logo from "./images/logoFinal.png";
//Header contains and displays global tools and navigation.
const Header = ({title}) => {
//add constructors here if needed.
    return (

        <header  className='header' >
           <img  className= 'logoImg' src={logo} alt=''/>

        </header>

    )
}


export default Header

//<img className = 'headerImg' src='/images/Navbar.jpg' alt=''/>