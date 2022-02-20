import React from "react";

const Signup = () => {
    
    return (
        <>
        <div className="container d-flex">
            <div className="col-3 pe-2 ps-2 py-5 bg-primary">
                
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <button type="submit"  className="btn btn-light">Submit</button>
                
            </div>
            <div className="col-9 pe-2 ps-2 py-5">Signup Now</div>
            
        </div>

        </>
    )
}

export default Signup