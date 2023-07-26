import styles from "./index.module.scss";

export interface TextFieldPropsType
  extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: String;
  helperText?: String;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  multiline?: boolean;
  name?: string;
  value?: string;
}

const TextField: React.FC<TextFieldPropsType> = ({
  label,
  helperText,
  multiline,
  ...props
}) => {
  return (
    <div className={styles.formControl}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}:
        </label>
      )}
      <div className={styles.inputWrapper}>
        {multiline ? (
          <textarea className={styles.input} {...props} />
        ) : (
          <input className={styles.input} {...props} />
        )}
      </div>
      {helperText && <span className={styles.error}>{helperText}</span>}
    </div>
  );
};

export default TextField;
