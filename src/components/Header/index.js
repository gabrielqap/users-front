import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from '../../history';

const Header = () => (
    <header id="main-header">
        <div>
        </div>
        User Manager
        <Button className="header-button" variant="success" color="secondary" onClick={() => history.push('/new')}>
            New
        </Button>{' '}
    </header>
);

export default Header;