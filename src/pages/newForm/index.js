import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import api from '../../services/api';
import history from '../../history';
import './styles.css';


export default class newForm extends Component {
    typeForm = "";
    constructor(props){
        super(props);
        const { location } = this.props
        this.state = {
            name : '', 
            email : '', 
            password : ''
        };
        if(location.pathname === '/new'){
            this.typeForm = "POST";
        } else {
            this.gettingInfos();   
            this.typeForm = "PUT"; 
        }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
    }

    async gettingInfos(){
        const { id } = this.props.match.params;
        const response = await api.get(`/users/${id}`);
        this.setState(
            {
                name: response.data.name,
                email: response.data.email,
                password: response.data.password
            }   
        );
        console.log(this.state);
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = async(event) =>  {
        event.preventDefault()
        const { name, email, password} = this.state;
        if(this.typeForm === "POST"){
            await api.post('/users', {name, email, password})
            .then((res) => {
                console.log(res);
                alert('Successful registration!');
            });
        }
        else {
            const { id } = this.props.match.params;
            await api.put(`/users/${id}`, {name, email, password})
            .then((res) => {
                console.log(res);
                alert('Successsfully changed!');
            });
        }
       // console.log(response);
    }
    
    

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={this.handleChange} value={this.state.name} name="name" required type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  onChange={this.handleChange} value={this.state.email} name="email" required type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.handleChange} value={this.state.password} name="password" required type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
                <Button className="back-button" variant="primary" type="submit" onClick={() => history.push('/')}>
                    Back
                </Button>
            </Form>
        );
    }
}