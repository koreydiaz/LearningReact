import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title }) => {
  return (
      <header className='header'>
          <h1>{title}</h1>
          <Button color='red' text='Add'/>


      </header>
  )
}

Header.defaultProps =
{
  title: 'React Webpage',
} 

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JavaScript
// const headingStyle = 
// {
//   color: 'red', 
//   backgroundColor: 'blue'
// }

export default Header