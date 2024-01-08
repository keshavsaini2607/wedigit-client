import { Form, Input } from "antd";
import React from "react";
import { FormInputInterface } from "../../utils/interface/formInput.interface";

interface PhoneInputInterface {
   input: FormInputInterface;
}

const PhoneInput: React.FC<PhoneInputInterface> = ({ input }) => {
   return (
      <div className="flex_row">
         <div style={{width: '100%'}}>
            <label>{input.label}</label>
            <Form.Item
               name={input.name}
               wrapperCol={{ span: 24 }}
               rules={[
                  {
                     required: input.required,
                     message: `Please enter ${input.label}`,
                  },
                  { validator: input.validator },
               ]}
            >
               <Input placeholder={input.placeholder} type={input.type} />
            </Form.Item>
         </div>
         <span className="hyper-link">Verify Phone</span>
      </div>
   );
};

export default PhoneInput;
