import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, size, children, backgroundColor, color }) => {
  const buttonStyles = {
    padding: size === 'small' ? '.6em 0.8em' : size === 'large' ? '1em 2em' : '0.8em 1.5em',
    fontSize: size === 'small' ? '0.8em' : size === 'large' ? '1.2em' : '0.9em',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: backgroundColor,
    color: color,
    border: 'none',
    outline: 'none',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
  color: '#fff',
  backgroundColor: '#007bff',
};

export default Button;
