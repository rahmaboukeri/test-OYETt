import React from 'react'
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {Button} from 'react-bootstrap';

// import  deleteBtn  from "../../assets/delete.png";
// import avatar  from "../../assets/avatar.png";
// import editBtn from "../../assets/edit.png";
import { deleteContact, getOneContact, ToggleTrue } from '../../JS/Action';
// import { Link } from "react-router-dom";


import "./CardList.css"


const CardList = ({titre}) => {
    const dispatch = useDispatch()
    return (
        <div className="contact-card">
            <Card className="sousCard">
                    
                <Card.Body style={{width:"175px",justifyContent:"center"}}>
                    <Card.Title>{titre.name}</Card.Title>
                    {/* <Card.Text>
                        <span>{titre.mail}</span><br />
                        <span>{contact.phone}</span>
                    </Card.Text> */}
                       <div>
{/*                              
                        <img src={deleteBtn} className="btn-icon"
                        alt="edit-icon" 
                        onClick={ ()=>dispatch(deleteContact(contact._id)) }
                         />  */}
                          <Button variant="danger" onClick={ ()=>dispatch(deleteContact(titre._id))}>delete</Button> 


                        {/* <Link to="/editcontact" >
                    <img src={editBtn} className="btn-icon"
                        alt="edit-icon" onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneContact(contact._id) ) } } />   
                          <Button variant="danger" onClick={ ()=>{dispatch(ToggleTrue()); dispatch(getOneContact(contact._id) ) } }>delete</Button> 

                        </Link>  */}
                        </div>              
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardList
