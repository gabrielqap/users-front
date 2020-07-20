import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../../history';

const Header = () => (
    <header id="main-header">
        JSHunt
        <Button variant="danger" color="secondary" onClick={() => history.push('/new')}>
            Cadastrar
        </Button>{' '}
    </header>
);

export default Header;