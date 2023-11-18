const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			]
		},
		actions: {
			postContact: async(url, options) => {
				const response = await fetch(url, options)
				if(response.ok){
					alert(`Contact added!`)
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}
			}
		}
	};
};

export default getState;
