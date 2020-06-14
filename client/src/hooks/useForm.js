// write your custom hook here to control your checkout form

import { useState } from 'react';

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = e => {
        console.log(e.target.name, e.target.value);
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    };

    return [values, handleChanges];
}
