import { useState } from "react";

const Login =(props) => {

    const [username, setusername] = useState ("");

    const handlesubmit =(event)=>{
         event.preventDefault();
         props.setUser(username);
    };

    return(
        <div>   
            <form  onSubmit={handlesubmit}> 
                <input type="text" placeholder="enter your
                userName" 
                onChange={(event) => setusername(event.target.value)}
                   />
                <button type="log">LogIn</button>
            </form>
        </div>
    );
};
export default Login;