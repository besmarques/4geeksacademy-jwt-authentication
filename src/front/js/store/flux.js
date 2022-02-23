const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				})
				
				//reset the global store
				setStore({ demo: demo });
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
				fetch("https://3001-besmarques-4geeksacademy-6wvgd743tby.ws-eu33.gitpod.io/api/signup",post)
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
				fetch("https://3001-besmarques-4geeksacademy-6wvgd743tby.ws-eu33.gitpod.io/api/login",post)
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