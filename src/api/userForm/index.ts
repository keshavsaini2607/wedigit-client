import server from "../axios";

export interface saveFormRequest {
    name: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date;
}

export const saveForm = async(props: saveFormRequest) => {
    try {
        const response = await server.post('/forms/save', props);
        if(!response) {
            throw new Error('Something went wrong');
        }
        return response.data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}