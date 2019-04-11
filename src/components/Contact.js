import React, {Component} from 'react'
import users from '../users.json'
import {Link} from 'react-router-dom'

class Contact extends Component {
    state = {
        img:'',
        name:'',
        email:'',
        phone:'',
        location:''
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id)

        const contact = users.find(users => users.id === id)

        this.setState({
            img: contact.picture.large,
            name: `${contact.name.first} ${contact.name.last}`,
            email:  contact.email,
            phone: contact.phone,
            location: `${contact.location.city}, ${contact.location.state}`
        })
    }

    render() {
        return (
            <div>
                <div className="top">
                <p className="relative"><Link className="buttonBack" to="/">&laquo;</Link></p>
                <p><img className="bigPic" src={this.state.img} /></p>
                </div>
                <p className="borderBottom contactInfo">{this.state.name}</p>
                <p className="borderBottom contactInfo">{this.state.email}</p>
                <p className="borderBottom contactInfo">{this.state.phone}</p>
                <p className="contactInfo">{this.state.location}</p>
            </div>
        )
    }
}

export default Contact