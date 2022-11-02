export const validate = data =>{

    const errors = {};

    if(!data.name.trim()){
        errors.name= "Username required"
    }
    else{
        delete errors.name
    }

    if(!data.email){
        errors.email = "Email required"
    } else if(!/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(data.email)){
        errors.email = "Email Address is invalid"
    } else{
        delete errors.email
    }

    if (!data.password){
        errors.password = "Password is required"
    } else if(!/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=.*?[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z0-9\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,60}$/.test(data.password)){
        errors.password = "Password is invalid"
    } else {
        delete errors.password
    }

    if (!data.confirmPassword){
        errors.confirmPassword = "Confirm the password"
    } else if (data.confirmPassword !== data.password){
        errors.confirmPassword = "Password do not match"
    } else {
        delete errors.confirmPassword
    }

    if (data.isAccepted){
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our roles"
    }

    return errors;
    
}


