import PropTypes from 'prop-types';

export const Notification = ({ message, className }) => {
  return <div className={className}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};
