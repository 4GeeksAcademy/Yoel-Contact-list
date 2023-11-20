import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactGrid = () => {
    const [agenda, setAgenda] = useState("");
    const [selectedAgenda, setSelectedAgenda] = useState([])
    const [selectedUser, setSelectedUser] = useState({})

    const {store, actions} = useContext(Context);

    const handleAgendaView = async(e) =>{
        e.preventDefault();
        const correctAgenda = agenda.trim();

        const finalAgenda = await actions.getAgenda(correctAgenda)
        setSelectedAgenda(finalAgenda)
        store.currentAgenda = correctAgenda
        console.log(store.currentAgenda)
    }

    const handleDeleteAgenda = () =>{
        actions.deleteAgenda(agenda)
    }

    const handleDetails = async(e)=>{
        const contact = await actions.getContact(e.target.value)
        setSelectedUser(contact)

        document.querySelector(".details").style.visibility = "visible"
        console.log(selectedUser)
    }

    const handleDeleteContact = async() => {
        await actions.deleteContact(selectedUser)
        handleClose()

        const finalAgenda = await actions.getAgenda(store.currentAgenda)
        setSelectedAgenda(finalAgenda)

    }

    const handleClose = () =>{
        document.querySelector(".details").style.visibility = "hidden"
    }
    
    useEffect(() => {
        async function fetchData() {
            if (store.currentAgenda !== "") {
                const actualAgenda = await actions.getAgenda(store.currentAgenda);
                setSelectedAgenda(actualAgenda);
            }
        }
        fetchData();
    }, [store.currentAgenda]);


    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('touchstart', function(event) {
            contactCards.forEach(otherCard => {
                otherCard.classList.remove('touched');
            });
            this.classList.add('touched');
        });
    });

    return(
        <div className="global-container">
            <div className="agenda-picker-container">
                <form onSubmit={handleAgendaView}><div className="input-group mb-3">
                        <span className="input-group-text agenda-picker" id="basic-addon1">Agenda</span>
                        <input value={agenda} onChange={(e) => setAgenda(e.target.value)} type="text" className="form-control" placeholder="Choose an agenda" aria-label="Username" aria-describedby="basic-addon1"/>
                </div></form>
                
            </div>
            <div className="agenda-title">{store.currentAgenda != "" ? <h1>Current agenda: {store.currentAgenda}</h1> : <h1>Select agenda</h1>}</div>
            <div className="grid-container">
                {selectedAgenda.map((item) => {
                    return(<div className="contact-card">
                    <div className="card-header">
                       <h2>{item.full_name}</h2>
                    </div>
                    <div className="card-body">
                        <p>Phone: {item.phone}</p>
                        <p>Email: {item.email}</p>
                        <button value={item.id} onClick={handleDetails} className="btn btn-primary">Details</button>
                        
                    </div>
                </div>)
                    
                })}
            </div>
            <div className="delete-agenda"><button onClick={handleDeleteAgenda} className="btn btn-secondary">Delete Agenda</button></div>
            <div className="details col-xs-12 col-md-10 col-lg-8">
                <div className="close-container"><button onClick={handleClose} className="btn btn-secondary">Close</button></div>
                <h1>Name: {selectedUser.full_name}</h1>
                <p>Phone: {selectedUser.phone}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Address: {selectedUser.address}</p>
                <p>Agenda: {selectedUser.agenda_slug}</p>
                <button onClick={handleDeleteContact} value={selectedUser.id} className="btn btn-secondary delete-contact ms-5 mb-2 mt-3">Delete contact</button>
            </div>
        </div>
    )
}


