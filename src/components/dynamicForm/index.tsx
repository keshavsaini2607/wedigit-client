import { Button, Form, Input } from "antd";
import React from "react";
import { FormInterface } from "../../utils/interface/form.interface";
import { FormInputInterface } from "../../utils/interface/formInput.interface";

const renderInput = (input: FormInputInterface) => {
   return (
      <div key={input.name}>
         <label>{input.label}</label>
         <Form.Item
            name={input.name}
            wrapperCol={{ span: 24 }}
            rules={[
               {
                  required: input.required,
                  message: `Please enter ${input.label}`,
               },
               { validator: input.validator }
            ]}
         >
            <Input placeholder={input.placeholder} type={input.type} />
         </Form.Item>
      </div>
   );
};

const DynamicForm: React.FC<FormInterface> = ({
   inputs,
   formName,
   onSubmit,
}) => {
   return (
      <Form name={formName} onFinish={onSubmit} className="w-full">
         {inputs?.map((input: FormInputInterface) => renderInput(input))}
         <Form.Item wrapperCol={{ span: 24 }}>
            <Button
               type="primary"
               htmlType="submit"
               size="large"
               className="w-full"
            >
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default DynamicForm;
