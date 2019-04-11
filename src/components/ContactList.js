import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import users from '../users.json'


const ContactList = (props) => (
            <Fragment>
                <h1>My Peeps</h1>
                <ul>
                    {users.map(contact => (
                        <li key={`contact-${contact.id}`} 
                            className="contact">
                            <Link to={"/contact/" + contact.id}>
                                <img src={contact.picture.thumbnail}/> <span>{contact.name.first}  {contact.name.last}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        )

export default ContactList