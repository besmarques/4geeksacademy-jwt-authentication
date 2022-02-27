const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,	
		},
		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			
			createUser: (email, password) => {
				const store = getStore();
				console.log(email,password);

				const post = {
					method: "Post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				fetch("https://3001-besmarques-4geeksacademy-f9jctmvlbg7.ws-eu34xl.gitpod.io/api/signup",post)
					.then(resp => {
						if (resp.status === 200) return resp.json();
						else alert("erro");
					})
					.then()
					.catch(error =>{
						console.error("error catched");
					})
				},
			loginUser: (email, password) => {
				const store = getStore();

				const post = {
					method: "Post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				fetch("https://3001-besmarques-4geeksacademy-f9jctmvlbg7.ws-eu34xl.gitpod.io/api/login",post)
					.then(resp => {
						if (resp.status === 200) return resp.json();
						else alert("erro");
					})
					.then(data => {
						sessionStorage.setItem("token", data.token);
						setStore({token:data.token})
					})
					.catch(error =>{
						console.error("error catched");
					})
				},
				logoutUser: () => {
					const store = getStore();
					sessionStorage.removeItem("token");
					setStore({token:null})
				},
				
		}
	};
};

export default getState;