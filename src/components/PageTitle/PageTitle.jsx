import PropTypes from 'prop-types';

export const PageTitle = ({ children }) => {
  return <h1>{children}</h1>;
};

PageTitle.propTypes = {
  children: PropTypes.any,
};
