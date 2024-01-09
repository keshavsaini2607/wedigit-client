import { Modal } from "antd";
import React from "react";
import { FormInputInterface } from "../../utils/interface/formInput.interface";
import { FormInterface } from "../../utils/interface/form.interface";
import DynamicForm from "../dynamicForm";
import { saveForm, saveFormRequest, verifyOtp } from "../../api/userForm";
import { useNavigate } from "react-router-dom";

interface VerificationModalInterface {
   isOpen: boolean;
   onClose: () => void;
   formData: saveFormRequest | undefined;
}

const otpFormInputs: FormInputInterface[] = [
   {
      name: "otp",
      placeholder: "OTP",
      type: "text",
      required: true,
      label: "One time password",
   },
];

const VerificationModal: React.FC<VerificationModalInterface> = ({
   isOpen,
   onClose,
   formData,
}) => {
   const navigate = useNavigate();
   const submitOtp = async (data: { otp: string }) => {
      console.log({ data });
      if (formData && formData.phoneNumber) {
         const response = await verifyOtp(
            `+91${formData.phoneNumber}`,
            data.otp
         );
         if (response && response?.success) {
            formData.dateOfBirth = new Date(formData.dateOfBirth);
            const response = await saveForm(formData);
            if (response?.success) {
               alert("Form saved. Thanks for your response!");
               setTimeout(() => {
                  navigate('/list');
               }, 0)
            } else {
               alert('This email is already registered');
            }
            onClose();
         } else {
            alert(response?.message);
         }
      }
   };
   const otpForm: FormInterface = {
      formName: "otpForm",
      inputs: otpFormInputs,
      onSubmit: submitOtp,
      submitBtnName: "Submit Otp",
   };

   return (
      <Modal
         title="Let's Verify Your Phone Number"
         open={isOpen}
         onOk={onClose}
         onCancel={onClose}
         footer={null}
      >
         <p>In order to register you need to verify your phone number</p>
         <p>An otp is sent to your phone</p>
         <DynamicForm {...otpForm} />
      </Modal>
   );
};

export default VerificationModal;
