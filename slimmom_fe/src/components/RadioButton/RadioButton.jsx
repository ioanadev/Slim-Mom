import { useField, useFormikContext } from "formik";
import { InputRadio, LabelRadio } from "../DailyForm.styled";

export const RadioButton = ({ label, ...props }) => {
    const [field] = useField(props);
    const { values } = useFormikContext();
    const selected = values.bloodType === props.value;
    
    return (
      <LabelRadio selected={selected}>
        <InputRadio type="radio" {...field} {...props} />
        {label}
      </LabelRadio>
    );
  };