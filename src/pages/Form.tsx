import  { useState } from "react";
import { FormInterface } from "../utils/interface/form.interface";
import { FormInputInterface } from "../utils/interface/formInput.interface";
import DynamicForm from "../components/dynamicForm";
import { validateDateOfBirth } from "../utils/helpers/dobChecker";
import { validatePhoneNumber } from "../utils/helpers/phoneNumberChecker";
import { validateEmail } from "../utils/helpers/emailChecker";
import { saveFormRequest, sendOtp } from "../api/userForm";
import VerificationModal from "../components/ui/VerificationModal";

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
      placeholder: "Your email here...",
      type: "email",
      required: true,
      label: "Email",
      validator: validateEmail,
   },
   {
      name: "phoneNumber",
      placeholder: "Your phone number here...",
      type: "phone",
      required: true,
      label: "Phone Number",
      validator: validatePhoneNumber,
   },
   {
      name: "dateOfBirth",
      placeholder: "Your date of birth here...",
      type: "date",
      required: true,
      label: "Date of Birth",
      validator: validateDateOfBirth,
   },
];

const Form = () => {
   const [showVerificationModal, setShowVerificationModal] = useState(false);
   const [data, setData] = useState<saveFormRequest | undefined>();
   const submitForm = async (data: saveFormRequest) => {
      setData(data);
      await handlePhoneVerification(data.phoneNumber);
   };

   const handlePhoneVerification = async (phoneNumber: string) => {
      const otpRes = await sendOtp(`+91${phoneNumber}`);

      if (otpRes) {
         setShowVerificationModal(true);
      }
   };

   const handleVerifyPhone = async () => {
      setShowVerificationModal(false);
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
         <VerificationModal
            isOpen={showVerificationModal}
            onClose={handleVerifyPhone}
            formData={data}
         />
      </div>
   );
};

export default Form;
