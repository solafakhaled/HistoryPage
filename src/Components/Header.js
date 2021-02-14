import PropTypes from 'prop-types'
//Header contains and displays global tools and navigation.
const Header = ({title}) => {
//add constructors here if needed.
    return (
 
        <header className='header'>
           <h1>{title}</h1>
        </header>
    )
}
//create default props 
Header.defaultProps = {
    title:'Case History'

}
//create data type 
Header.propTypes = {
    title: PropTypes.string.isRequired,

}
export default Header