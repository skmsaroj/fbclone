import React, { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
function Navbar(props) {

    const [usename, setUsename] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    function login() {

        var users = JSON.parse(localStorage.getItem('users'))

        var inc = 0;
        for (var user of users) {
            if (user.usename === usename && user.password === password) {
                inc++;
            }
        }
        if (inc === 1) {
            alert("login successfull")
            navigate.push("/Dashboard")

        } else {
            alert("invalid login");
        }
    }

    return (
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>facebook</h1>
            </div>
            <div className='col-md-6'>
                <input
                    type="text"
                    placeholder='Username'
                    value={usename}
                    onChange={(e) => setUsename(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
}

export default Navbar;