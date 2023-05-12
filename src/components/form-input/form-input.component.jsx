import { Fragment } from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Fragment>
      <label>Display Name</label>
      <input
        type="text"
        required
        onChange={handleChange}
        name="displayName"
        value={displayName}
      />
    </Fragment>
  );
};

export default FormInput;
