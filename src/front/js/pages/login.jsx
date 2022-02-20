import React, {useState} from "react";

const Login = () => {
    
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const getUser = (e) => {
        setUser(e.target.value);
      };
      const getPassword = (e) => {
        setPassword(e.target.value);
      };
    

    return (
        <>
        <div className="container d-flex">
            <div className="col-3 pe-2 ps-2 py-5 bg-primary">
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input type="email" onChange={getUser} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input type="password" onChange={getPassword} className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit"  onClick={"teste"} className="btn btn-light">Submit</button>
                
            </div>
            <div className="col-9 pe-2 ps-2 py-5">Login</div>
            
        </div>

        </>
    )
}

export default Login