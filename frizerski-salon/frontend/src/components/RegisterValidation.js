function Validation(values) {
    alert("")
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_patern = /^(?=.*\d)(d?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.firstName===""){
        error.firstName="Niste unijeli ime"
    }
    else{
        error.firstName=""
    }

    if(values.lastName===""){
        error.lastName="Niste unijeli prezime"
    }
    else {
        error.lastName=""
    }

    if(values.nickname===""){
        error.nickname="Niste unijeli nadimak"
    }
    else{
        error.nickname=""
    }

    if(values.email===""){
        error.email="Niste unijeli email"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email nije ispravan"
    }else{
        error.email=""
    }

    if(values.password===""){
        error.password="Niste unijeli lozinku"
    }
    else if(!password_patern.test(values.password)){
        error.password="Lozinka nije ispravna"
    }else{
        error.password=""
    }
    return error;
}

export default Validation;