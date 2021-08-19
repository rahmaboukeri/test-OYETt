import React from 'react'

import './Home.css'

import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { ToggleFalse } from '../../JS/Action/ActionsContacts';

const Home = () => {
	// const dispatch = useDispatch()
    return (
        <div>
					<Link to="/" >
						<Button className="app-button" size="lg" 
							>Contacts Liste	</Button>
					</Link>	
					<Link to="/addcontact" >
						<Button className="app-button" size="lg" 
							// onClick={()=> dispatch(ToggleFalse())}
                            	>Add Contact </Button>
					</Link>	
        </div>
    )
}

export default Home
