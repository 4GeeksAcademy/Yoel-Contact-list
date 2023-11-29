import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";


export const AddContact = () =>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [agenda, setAgenda] = useState("");

    const { store, actions } = useContext(Context)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleAdress = (e) => {
        setAdress(e.target.value)
    }
    const handleAgenda = (e) => {
        setAgenda(e.target.value)
    }

    const postContact = (e) => {
        e.preventDefault();
        const correctName = name.trim();
        const correctAgenda = agenda.trim();
        const correctPhone = phone.trim();
        const correctEmail = email.trim();
        const correctAdress = adress.trim();

        const object = {
                "full_name": `${correctName}`,
                "email": `${correctEmail}`,
                "agenda_slug": `${correctAgenda}`,
                "address": `${correctAdress}`,
                "phone": `${correctPhone}`      
        };

        if(correctName != "" && correctAgenda != ""){
            actions.postContact(object);
        }
        else{
            alert("Please introduce at least a valid name and agenda.")
        }
        setName("");
        setAdress("");
        setEmail("");
        setPhone("");
        setAgenda("");
    }

    
    return(
        <div className="container form">
            <div className="form-header"><h1>New Contact</h1></div>
            <form onSubmit={postContact}>
                <div className="form-body">
                    <div className="input-group mb-3">
                    <span className="input-group-text name" id="basic-addon1">Name</span>
                        <input value={name} onChange={handleName} type="text" className="form-control" placeholder="Eg: John Doe" aria-label="Name" aria-describedby="basic-addon1" required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text phone" id="basic-addon1">Phone</span>
                        <input value={phone} onChange={handlePhone} type="text" className="form-control" placeholder="Eg: 678342562" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text email" id="basic-addon1">Email</span>
                        <input value={email} onChange={handleEmail} type="text" className="form-control" placeholder="Eg: name@gmail.com" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text adress" id="basic-addon1">Adress</span>
                        <input value={adress} onChange={handleAdress} type="text" className="form-control" placeholder="Eg: Tenerife, Spain" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="input-group mb-3 agenda">
                        <span className="input-group-text " id="basic-addon1">Agenda</span>
                        <input value={agenda} onChange={handleAgenda} type="text" className="form-control" placeholder="Eg: Family" aria-label="Username" aria-describedby="basic-addon1" required/>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Create contact</button>
            </form>
            
        </div>
    )
    
}