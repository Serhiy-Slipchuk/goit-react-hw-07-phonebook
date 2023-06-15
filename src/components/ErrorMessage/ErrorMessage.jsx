import css from './ErrorMessage.module.scss';

const ErrorMessage = function ({ message }) {
  return (
    <div className={css['error-thumb']}>
      <p className={css['error-message']}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
