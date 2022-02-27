import React, {useContext} from "react"
import { Context } from "../store/appContext";

const Private = () => {
    const { store, actions } = useContext(Context);
    console.log(sessionStorage.getItem("token"))
    if (sessionStorage.getItem("token") == null){
        return(
            <>
                <h1>Go to login page</h1>
            </>
        )
    }else{
        return(
        <>
            <div className="row">
                <h1>Welcome to your private page</h1>
            </div>
        </>
    )
    }
    
    
}
export default Private