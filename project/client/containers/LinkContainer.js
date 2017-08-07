import React, { PropTypes } from 'react';
//import Link from 'react-router/Link';

const LinkContainer = ({ to, children, activeOnlyWhenExact }) => (
  <Link to={to} activeOnlyWhenExact={activeOnlyWhenExact}>
    {({ onClick, href }) =>
      React.cloneElement(children, {
        onClick,
        href
      })
    }
  </Link>
);

LinkContainer.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeOnlyWhenExact: PropTypes.bool,
};

export default LinkContainer;