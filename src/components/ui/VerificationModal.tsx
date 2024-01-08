import { Alert, Modal } from "antd";
import React from "react";
import { FormInputInterface } from "../../utils/interface/formInput.interface";
import { FormInterface } from "../../utils/interface/form.interface";
import DynamicForm from "../dynamicForm";
import { verifyOtp } from "../../api/userForm";

interface VerificationModalInterface {
   isOpen: boolean;
   onClose: () => void;
   phoneNumber: string | undefined;
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
   phoneNumber,
}) => {
   const submitOtp = async (data: { otp: string }) => {
      console.log({ data });
      if (phoneNumber) {
         const response = await verifyOtp(`+91${phoneNumber}`, data.otp);
         if (response && response?.success) {
            console.log({ response });
            onClose();
         } else {
            alert(response?.message)
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
      <Modal title="Let's Verify You Phone Number" open={isOpen} onOk={onClose} footer={null}>
         <p>In order to register you need to verify your phone number</p>
         <p>An otp is sent to your phone</p>
         <DynamicForm {...otpForm} />
      </Modal>
   );
};

export default VerificationModal;
