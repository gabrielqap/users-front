import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import api from '../../services/api';

export default class newForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '', 
            email : '', 
            password : ''
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = async(event) =>  {
        event.preventDefault()
        const { name, email, password} = this.state;
        const response = await api.post('/users', {name, email, password})
            .then((res) => {
                console.log(res);
            });
        console.log(response);
        alert('Cadastrado com sucesso!');
    }
    

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleChange} name="name" required type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  onChange={this.handleChange} name="email" required type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.handleChange} name="password" required type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}