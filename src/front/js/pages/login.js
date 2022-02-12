import React, {useState} from "react";


const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState({});
    var processToken = token.access_token;
  
    const getUser = (e) => {
      setUser(e.target.value);
    };
    const getPassword = (e) => {
      setPassword(e.target.value);
    };
    const getToken = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        username: user,
        password: password,
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(
        "https://3001-besmarques-4geeksacademy-9kv25gh9qs3.ws-eu31.gitpod.io/api/protected",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setToken(result))
        .catch((error) => console.log("error", error));
  
      console.log("hi");
      console.log(user, password);
    };
  
    const enterProtected = () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + processToken);
  
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
  
      fetch(
        "https://3001-besmarques-4geeksacademy-9kv25gh9qs3.ws-eu31.gitpod.io/api/protected",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => alert("you are in a restricted area"))
        .catch((error) => console.log("error", error));
    };
  
    return (
      <>
        <h1>Login</h1>
        <input type="text" placeholder="user" onChange={getUser}></input>
        <input type="text" placeholder="password" onChange={getPassword}></input>
        <button onClick={getToken}>submit</button>
        <button onClick={enterProtected}>enter</button>
      </>
    );
  };
  export default Login;