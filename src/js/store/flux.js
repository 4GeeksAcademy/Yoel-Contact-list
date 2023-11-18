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
			postContact: async(url, object) => {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)            
				};
				const response = await fetch(url, options)
				if(response.ok){
					alert(`Contact added to ${object.agenda_slug}!`)
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
