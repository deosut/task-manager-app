import styles from "./index.module.scss";

export interface FormPropTypes extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormPropTypes> = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
};

export default Form;
