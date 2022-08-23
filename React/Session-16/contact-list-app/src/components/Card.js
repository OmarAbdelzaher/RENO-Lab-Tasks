import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import {Card as BSCard} from 'react-bootstrap';

export default class Card extends Component {
    clickHandler = () => {
        this.props.removeContact(this.props.contact.id);
    }
    render() {        
        return (
            <BSCard className="card-style">
                <BSCard.Img variant="top" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"/>
                <BSCard.Body>
                    <BSCard.Text>Name: {this.props.contact.name}</BSCard.Text>
                    <BSCard.Text>User Name: {this.props.contact.username}</BSCard.Text>
                    <BSCard.Text>Email: {this.props.contact.email}</BSCard.Text>
                    <BSCard.Text>Phone: {this.props.contact.phone}</BSCard.Text>
                    <BSCard.Text>Company: {this.props.contact.company.name}</BSCard.Text>

                    <Button variant="danger" onClick={this.clickHandler}>Remove Contact</Button>
                </BSCard.Body>
            </BSCard>
        )
    }
}
