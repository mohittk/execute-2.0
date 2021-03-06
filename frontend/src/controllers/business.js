const base = "http://localhost:5000";

export const auth_business = async(obj) =>{

    const res = await fetch(`${base}/api/business/auth/`,{
        method : "GET",
        body : JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json",
        }
    });
    const ans = await res.json();
    return ans;
}

export const login_business = async(obj) => {
    const res = await fetch(`${base}/api/business/login`,{
        method : "POST",
        body: JSON.stringify(obj),
        headers : {
            "Content-type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
}


export const signup_business = async(obj) =>{
    const res = await fetch(`${base}/api/business/signup`,{
        method : "POST",
        body: JSON.stringify(obj),
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    return ans;
}

export const get_businesses = async() =>{
    const res = await fetch(`${base}/api/business`,{
        method : "GET",
        headers : {
            "Content-Type": "application/json"
        }
    });
    const ans = await res.json();
    console.log(ans);
    return ans;
}

