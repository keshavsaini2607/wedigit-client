export const validatePhoneNumber = async (
   _: any,
   value: string | undefined
) => {
   const phoneNumberRegex = /^[789]\d{9}$/;

   if (value && !phoneNumberRegex.test(value)) {
      throw new Error("Please enter a valid Indian phone number.");
   }
};
