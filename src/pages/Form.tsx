import React from "react";
import { FormInterface } from "../utils/interface/form.interface";
import { FormInputInterface } from "../utils/interface/formInput.interface";
import DynamicForm from "../components/dynamicForm";
import { validateDateOfBirth } from "../utils/helpers/dobChecker";
import { validatePhoneNumber } from "../utils/helpers/phoneNumberChecker";
import { validateEmail } from "../utils/helpers/emailChecker";
import { saveForm, saveFormRequest } from "../api/userForm";

const userDetailsInputs: FormInputInterface[] = [
   {
      name: "name",
      placeholder: "Your name here...",
      type: "text",
      required: true,
      label: "Name",
   },
   {
      name: "email",
      placeholder: "Your name here...",
      type: "email",
      required: true,
      label: "Email",
      validator: validateEmail
   },
   {
      name: "phoneNumber",
      placeholder: "Your name here...",
      type: "number",
      required: true,
      label: "Phone Number",
      validator: validatePhoneNumber,
   },
   {
      name: "dateOfBirth",
      placeholder: "Your name here...",
      type: "date",
      required: true,
      label: "Date of Birth",
      validator: validateDateOfBirth,
   },
];

const Form = () => {
   const submitForm = async(data: saveFormRequest) => {
      data.dateOfBirth = new Date(data.dateOfBirth);
      const response = await saveForm(data);
      if(response) {
         alert('Form saved. Thanks for your response');
      }
   };

   const userDetailsForm: FormInterface = {
      formName: "User Details Form",
      inputs: userDetailsInputs,
      submitBtnName: "Save Details",
      onSubmit: submitForm,
   };
   return (
      <div className="container">
         <h1 className="m-bottom">Add Your Details</h1>
         <div>
            <DynamicForm {...userDetailsForm} />
         </div>
      </div>
   );
};

export default Form;
