import { FormInputInterface } from "./formInput.interface";

export interface FormInterface {
    formName: string;
    onSubmit: (data: unknown) => void;
    inputs: FormInputInterface[];
    submitBtnName: string;
}