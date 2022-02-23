import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";



const Signup = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { store, actions } = useContext(Context);

    return (
        <>
        <div className="container d-flex">
            <div className="col-3 pe-2 ps-2 py-5 bg-primary">
              
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit" onClick={() => actions.createUser(email, password)} className="btn btn-light">Submit</button>
               
            </div>
            <div className="col-9 pe-2 ps-2 py-5">Signup Now</div>
            
        </div>

        </>
    )
}

export default Signup