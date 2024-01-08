import { FormInputInterface } from "./formInput.interface";

export interface FormInterface {
    formName: string;
    onSubmit: (data: any) => void;
    inputs: FormInputInterface[];
    submitBtnName: string;
}