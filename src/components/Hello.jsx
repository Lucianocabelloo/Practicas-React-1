import PropTypes from 'prop-types';

const Hello = ({ greetings }) => {
  return (
    <h1>Hello word {greetings}</h1>
  )
}

Hello.propTypes = {
    greetings: PropTypes.string.isRequired,
  };
  

export default Hello