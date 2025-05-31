export function validateFormData(formData) {
    const errors = {};

    //first name
    if (!formData.first_name?.trim()){
        errors.first_name ='First name is required';
    }

    //last name
    if(!formData.last_name?.trim()){
        errors.last_name = 'Last name is required'
    }

    //phone number
    if(!formData.number?.trim()){
        errors.number = 'number is required'
    }else if (!/^[6-9]\d{9}$/.test(formData.number)) {
        errors.number = "Invalid phone number"
    }

    //email
    if(!formData.email?.trim()){
        errors.email = 'email name is required'
    }else if (!/^\S+@\S+$/.test(formData.email)) {
        errors.number = "Invalid email format"
    }

    //password
    if(!formData.password){
        errors.password = 'password is required'
    }else if (formData.password.length < 6){
        errors.password ='Password must be at least 6 characters';
    }

    //confirm password
    if(!formData.confirmPassword){
        errors.confirmPassword = 'Please confirm your password'
    }else if (formData.password !== formData.confirmPassword){
        errors.confirmPassword = "Password do not match"
    }

    // Username
    if (!formData.userName?.trim()) {
        errors.userName = "Username is required";
    } else if (formData.userName.length < 4) {
        errors.userName = "Username must be at least 4 characters";
    }

    // PAN Number
    if (!formData.pan) {
        errors.pan = "PAN number is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) {
        errors.pan = "Invalid PAN format";
    }

    // Aadhar Number
    if (!formData.aadhar) {
        errors.aadhar = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadhar)) {
       errors.aadhar = "Aadhar must be 12 digits";
    }

    // Country
    if (!formData.country?.trim()) {
        errors.country = "Country is required";
    }

    // City
    if (!formData.city?.trim()) {
        errors.city = "City is required";
    }

    return errors;
    
}