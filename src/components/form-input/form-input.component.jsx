import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label ? (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
