import React,{useState,useEffect} from 'react'
import { Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import "./AddEditContact.css"

import addBtn from "../../assets/add.png";
import { addContact, updateContact } from '../../JS/Action';
// import { addContact } from '../../JS/Action/ActionsContacts';

const AddSuppContact = ({ history }) => {

     const handlChange = (e) =>
    {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const userReducer = useSelector(state => state.contactReducer.user)

    const dispatch = useDispatch()
    const [user, setUser] = useState({ name:"", mail:"", phone:0 });

    // useEffect(() => {
    //   (isEdit) ? setUser(userReducer) : setUser({ name:"", mail:"", phone:0 })
    // }, [isEdit,userReducer]);

    useEffect(() => {
        isEdit ? setUser(userReducer) : setUser({ titre: "" })
    }, [isEdit, userReducer]);

    
    
    return (
        <div className="container">
            <Form>
                <Form.Group >
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder="Enter name"
                    name="name" value={user.name} 
                    onChange={ handlChange } 
                    />
                    <Form.Text className="text-muted">
                        name is required
                    </Form.Text>
                </Form.Group>


                <Form.Group >
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="text" placeholder="Enter email"
                    name="mail" value={user.mail} 
                    onChange={handlChange} 
                    />
             

                    <Form.Text className="text-muted">
                        mail is required
                    </Form.Text>
                </Form.Group>

                
                <Form.Group>
                    <Form.Label>Enter phone </Form.Label>

                    <Form.Control type="number" placeholder="enter phone"
                    name="phone" value={user.phone} 
                    onChange={handlChange} 
                    />

                </Form.Group>
                    <div>
                       {   (!isEdit) ? 
                        <img src={addBtn} className="btn-icon" alt="add-icon" 
                        onClick={() => {dispatch(addContact(user)) ; history.push("/")} }
                         /> 
                        :
                        <img src={editBtn} className="btn-icon" alt="edit-icon"
                        onClick={()=>{ dispatch(updateContact(user._id, user)) ; history.push("/")} } />    
                         
                        }  
                    </div>              
            </Form>
        </div>
    )
}

export default AddSuppContact