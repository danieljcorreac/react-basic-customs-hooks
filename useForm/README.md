# useForm Hook

Ejemplo de uso de useForm.
```
    const initialForm = {
        name: '',
        age: 0,
        email: '',
    };
    const [formValues, handleInputChange, reset] = useForm(initialForm);
```