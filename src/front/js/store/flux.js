const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			user: []
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
			createUser: (user,password) => {
				const store = getStore(user, password);
				console.log(user,password);
				fetch("https://3001-besmarques-4geeksacademy-twkh1zos83e.ws-eu33.gitpod.io/api/signup" , {
					method: "POST",
					headers: { "Content-Type": "application/json" },
				})
					.then((resp) => {
						return resp.json();
					})
					.then(data => {
						//return data;
						"user": user,
						"password": password

						setStore({user : dataGathered});
					})
				   
			},
		}
	};
};

export default getState;
