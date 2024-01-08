import React, { useEffect, useState } from "react";
import { getForms } from "../api/userForm";
import { Card } from "antd";

interface FormResponseInterface {
   phoneNumber: string;
   name: string;
   email: string;
   dateOfBirth: string;
   _id: string;
   _v: number;
}

const List = () => {
   const [forms, setForms] = useState<FormResponseInterface[]>([]);

   useEffect(() => {
      (async () => {
         const resp = await getForms();
         if (resp) {
            setForms(resp?.forms);
         }
      })();
   }, []);

   console.log({ forms });

   return (
      <div className="container-big">
         <h1>Submitted Forms</h1>
         <div className="flex_wrap">
            {forms.map((form) => (
               <Card
                  key={form._id}
                  size="small"
                  title={form.name}
                  style={{ width: 300 }}
               >
                  <p>Email: {form.email}</p>
                  <p>Phone Number: {form.phoneNumber}</p>
                  <p>Date of Birth: {new Date(form.dateOfBirth).toDateString()}</p>
               </Card>
            ))}
         </div>
      </div>
   );
};

export default List;
