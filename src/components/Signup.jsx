import React, { useState } from 'react'


export default function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <React.Fragment>
            <div className="container">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" />
                        <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </React.Fragment>
    )

}