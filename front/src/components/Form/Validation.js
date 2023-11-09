const Validation = (userData, newErrors, setErrors) => {
    //email
    if (!userData.email) {
        setErrors({ ...newErrors, email: "Por favor completa este campo" });
    } else if (userData.email.length > 35) {
        setErrors({ ...newErrors, email: "Superó el máximo de caracteres permitido" });
    } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)) {
        setErrors({ ...newErrors, email: "Email inválido" });
    } else {
        setErrors({ ...newErrors, email: "" });
    }
    //password
    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({ ...newErrors, password: "Su clave debe contener entre 6 y 10 caracteres" });
    } else if (!/\d/.test(userData.password)) {
        setErrors({ ...newErrors, password: "Su clave debe contener al menos un número" });
    } else {
        setErrors({ ...newErrors, password: "" });
    }
}

export default Validation;




