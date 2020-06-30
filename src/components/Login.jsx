import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit(e){
        e.preventDefault()

        props.history.push("/home")
    }

    return (
        <React.Fragment>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <Link to="signup" className="btn btn-default">Signup</Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </React.Fragment>
    )

}