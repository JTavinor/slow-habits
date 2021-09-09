import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

function Form({
  formFields,
  formSubmit,
  formHeading,
  changeFormButtonText,
  changeFormHeading,
  submitFormButtonText,
  formHidden,
  hideFormClassName,
  swapForms,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={`formContainer ${formHidden && hideFormClassName} `}>
      <h1>{formHeading}</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="floatingLabelForm">
        <FormField
          formFields={formFields}
          register={register}
          errors={errors}
        />
        <button type="submit" className="submitButton">
          {submitFormButtonText}
        </button>
      </form>
      <div className="divider" />
      <h2 className="switchFormHeading">{changeFormHeading}</h2>
      <button
        className="submitButton switchFormButton"
        onClick={() => {
          swapForms();
        }}
      >
        {changeFormButtonText}
      </button>
    </div>
  );
}

export default Form;
