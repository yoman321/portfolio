import styles from "./ErrorModal.module.css";

const ErrorConfirmationModal = () => {
  return (
    <div className={styles.modal}>
      <h3>Email has not been sent. Please try again.</h3>
    </div>
  );
};
export default ErrorConfirmationModal;
