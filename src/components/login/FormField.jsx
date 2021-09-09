import React from "react";

function FormFields({ formFields, register, errors }) {
  return formFields.map(({ reference, validation, type, name }) => (
    <>
      <div className="floatingLabelGroup">
        <input
          {...register(reference, { ...validation })}
          id={reference}
          className={`floatingInputField `}
          required
          type={type}
        />
        <label
          htmlFor={reference}
          className={`floatingLabel ${
            errors.length > 0 ? "formFieldError" : ""
          }`}
        >
          {name}
        </label>
      </div>
      {errors[reference] && (
        <div className="inputErrorMessage">{errors[reference].message}</div>
      )}
    </>
  ));
}

export default FormFields;
