import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/Action";

import { Spinner } from "react-bootstrap";

import "./ListeTitre.css"
import CardList from '../CardList/CardList';

const ListeContact = () => {

    const dispatch = useDispatch()
    const titres = useSelector(state => state.Reducer.titres)
    const isLoading = useSelector(state => state.Reducer.isLoading)

    useEffect (() =>{
            dispatch(getContacts())
    }, [dispatch])
    
    return (
        <div className="contacts-content"> 
           { isLoading ?   <Spinner animation="border" style={{width:"300px",height:"300px"}} variant="danger" />

            :
             <div className="contacts-content">
                 {titres.map(titre => 
                    <CardList titre={titre} key={titre._id} />
                    ) }
             </div>
            }                         
        </div>
    )
}

export default ListeContact
