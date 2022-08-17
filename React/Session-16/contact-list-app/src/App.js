import './App.css';
import React, { Component } from 'react'
import Card from './components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ContactList extends Component {
  constructor() {
    super()
    this.state = {
      contactList: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ contactList: data }))
  }

  removeContact = (id) => {
    const newContactList = this.state.contactList.filter(contact => contact.id !== id)
    this.setState({ contactList: newContactList })
  }

  render() {
    return (
      <Container>
        <Row className='header'>
          <h1>Contact List</h1>  
        </Row>
        <Row>
            {
              this.state.contactList.map((contact) =>{
              return (
                <Col key={contact.id} xs={2} md={4}>
                  <Card contact={contact} removeContact={this.removeContact}/>
                </Col>
              )})
            }
        </Row>
      </Container>
    )
  }
}