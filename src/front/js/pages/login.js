import React, {useState} from "react";


const Login = () => {
    
    let [user, setUser] = useState("");
	let [password, setPassword] = useState("");
    


    return (
        <>
            <div className="col-6 d-flex justify-content-center mt-5">
                <input type="email" value={user} onChange={(e) => setUser(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                <button onClick={console.log(user,password)} type="submit" className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}
export default Login