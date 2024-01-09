import server from "../axios";

export interface saveFormRequest {
   name: string;
   email: string;
   phoneNumber: string;
   dateOfBirth: Date;
}

export const getForms = async () => {
   try {
      const response = await server.get('/forms/all');
      if(!response) {
         throw new Error("Something went wrong");
      }
      return response.data;
   } catch (error) {
      throw new Error("Something went wrong");
   }
};

export const saveForm = async (props: saveFormRequest) => {
   try {
      const response = await server.post("/forms/save", props);
      if (!response) {
         throw new Error("Something went wrong");
      }
      return response.data;
   } catch (error) {
      return error;
   }
};

export const sendOtp = async (phoneNumber: string) => {
   try {
      const response = await server.post("/verification/get-otp", {
         phoneNumber,
      });
      if (!response) {
         throw new Error("Something went wrong");
      }
      return response.data;
   } catch (error) {
      throw new Error("Something went wrong");
   }
};

export const verifyOtp = async (phoneNumber: string, otp: string) => {
   try {
      const response = await server.post("/verification/verify-otp", {
         phoneNumber,
         otp,
      });
      if (!response) {
         throw new Error("Something went wrong");
      }
      return response.data;
   } catch (error) {
      throw new Error("Something went wrong" + " "+error);
   }
};
