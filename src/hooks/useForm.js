// write your custom hook here to control your checkout form

import { useState } from "react"

const useForm = (initialValue) =>{

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValue] = useState(initialValue);

    const handleChanges =(e) => {
        console.log('target : ', e.target.name);
        setValue({...values, [e.target.name]: e.target.value });

    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowSuccessMessage(true);
    }

    return ([values, showSuccessMessage, handleSubmit, handleChanges]);

}
export default useForm;