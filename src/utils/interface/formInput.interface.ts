
export interface FormInputInterface {
   name: string;
   placeholder: string;
   type: string;
   required: boolean;
   label: string;
   validator?: (_: any, value: string | undefined) => Promise<void>;
   className?: string;
}
