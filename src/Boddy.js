// image 
// resister 

import React, { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import './Bodd.css';


function Boddy(props) {

    const [name, setName] = useState('');
    const [usename, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function resisteruser(event) {
        event.preventDefault();
       

         var users = JSON.parse(localStorage.getItem("users")||"[]")

        var newuser = {
            name: name,
            usename: usename,
            password : password
        }

        users.push(newuser)

     //   localStorage.setItem("users",JSON.stringify(newuser))
    
     localStorage.setItem("users",JSON.stringify(users))

     alert("ndkjkd")

    }

    return (
        <div className="row justify-content-center">



            <div className="col-md-6">
                <img src="https://banner2.cleanpng.com/20180701/xph/kisspng-facebook-inc-social-networking-service-mymfb-uss-denver-5b39338343f911.5605053315304753952784.jpg" alt='abn' className='imagee'></img>
            </div>


            <div className="col-md-4">
                <h1> Resister </h1>

                <form onSubmit={resisteruser}>

                    <input
                        type="text"
                        placeholder="name"
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="usename"
                        className='form-control'
                        value={usename}
                        onChange={(e) => setUsername(e.target.value)}

                    />

                    <input
                        type="text"
                        placeholder="password"
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="submit"
                        placeholder="name"
                        className='btn btn-primary'
                        value="Sine Up"
                    />

                </form>
            </div>
        </div>
    );
}

export default Boddy;