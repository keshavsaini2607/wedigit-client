export const validateEmail = async (_: any, value: string | undefined) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (value && !emailRegex.test(value)) {
      throw new Error('Please enter a valid email address.');
    }
  };
  