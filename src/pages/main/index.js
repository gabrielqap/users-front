import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component{

    state = {
        users : [],
        usersInfo : {}, 
        page: 1,
    }

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async(page = 1) => {
        const response = await api.get(`/users?page=${page}`);
        const {docs , ...usersInfo } = response.data;
        this.setState({ users: response.data.docs, usersInfo, page});
    };

    prevPage = () => {
        const { page } = this.state;
        
        if(page === 1) return;
        const pageNumber = page - 1;

        this.loadUsers(pageNumber);
    }

    nextPage = () => {
        const { page, usersInfo } = this.state;
        
        if(page === usersInfo.pages) return;

        const pageNumber = page + 1;
        this.loadUsers(pageNumber);
    }

    render() {
        const { users, page, usersInfo} = this.state;
        return (
          <div className="user-list">
              {users.map(user => (
                    <article key={user._id}>
                        <strong>{user.name}</strong>
                        <p>{user.email}</p>
                        <Link to={`/users/${user._id}`}>Editar</Link>
                        <Link to={`/users/${user._id}`}>Remover</Link>
                    </article>
                ))}

          <div className="actions">
              <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
              <button disabled={page===usersInfo.pages} onClick={this.nextPage}>Proximo</button>
          </div>
        </div>  
        );
    }
}