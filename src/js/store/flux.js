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
			postContact: async(object) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/";
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)            
				};
				const response = await fetch(url, options)
				if(response.ok){
					alert(`${object.full_name} added to "${object.agenda_slug}!"`)
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}
			},

			updateContact: async(object) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/";
				const options = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)            
				};
				const response = await fetch(url, options)
				if(response.ok){
					alert(`${object.full_name} updated in "${object.agenda_slug}!"`)
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}
			},

			deleteContact: async(object) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${object.id}`;
				const options = {
					method: "DELETE"          
				};
				const response = await fetch(url, options)
				if(response.ok){
					alert(`${object.full_name} deleted from "${object.agenda_slug}"!`)
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}
			},

			deleteAgenda: async(agenda) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`;
				const options = {
					method: "DELETE"           
				};
				const response = await fetch(url, options)
				if(response.ok){
					alert(`Agenda "${agenda}" was deleted.`)
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}

			},

			getAgenda: async(agenda) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`;
				const options = {
					method: "GET"           
				};
				const response = await fetch(url, options)
				if(response.ok){
					const data = response.json()
					return data
				}
				else{
					alert("Sorry, somenthing went wrong.")
					console.log("Error :", response.status, response.statusText)
				}

			},

			getContact: async(id) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
					method: "GET"           
				};
				const response = await fetch(url, options)
				if(response.ok){
					const data = response.json()
					return data
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
