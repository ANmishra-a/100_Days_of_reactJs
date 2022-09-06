import React from "react";
import {signInGoogleWithPopup,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
const Signin = ()=>{
    const loogGoogleUser = async() =>{
        const {user} = await signInGoogleWithPopup();
        createUserDocumentFromAuth(user)
    }
return(
<div>

<h1>Sign -in page</h1>
<button onClick = {loogGoogleUser}> Sign-In to google</button>
</div> 
)
}
export default Signin;