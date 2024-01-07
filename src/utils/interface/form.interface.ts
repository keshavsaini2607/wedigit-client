import { saveFormRequest } from "../../api/userForm";
import { FormInputInterface } from "./formInput.interface";

export interface FormInterface {
    formName: string;
    onSubmit: (data: saveFormRequest) => void;
    inputs: FormInputInterface[];
    submitBtnName: string;
}