// write your custom hook here to control your checkout form

import { useState } from "react"

//1. creating useForm function
const useForm = (initialValue) =>{

    //2. Adding stateful logic to handle the success message and initial form values. 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    //3. When the user click is detected, the target field names and values get updated. 
    const handleChanges =(e) => {
        console.log('target : ', e.target.name);
        setValues({...values, [e.target.name]: e.target.value });

    };
    //4. When the user clicks on the submit button, the success message state is updated to true. 
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowSuccessMessage(true);
    }

    //5. return all updated values from hook.
    return ([values, showSuccessMessage, handleChanges, handleSubmit]);

}
export default useForm;