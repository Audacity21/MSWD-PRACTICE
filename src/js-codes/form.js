import styles from '../css-codes/form.css';
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.password}`)
        event.preventDefault()
    }
    render(){
        return (
            <div>
                <div className="form-card">
                    <h3>
                        Welcome back!
                        <span>LOGIN TO YOUR ACCOUNT</span>
                    </h3>
                    <label>Username</label>
                    <input type="text" placeholder="ex: YourName" value={this.state.username} onChange={this.handleUsernameChange} />
                <br />
                    <label>Password</label>
                    <input type="password" placeholder="Minimum 8 characters" value={this.state.password} onChange={this.handlePasswordChange} />
                <br />
                    <Button className="submit" variant="contained" color="primary" onClick={this.handleSubmit}>SUBMIT</Button>
                </div>

                <div class="footer">
                    <h6>2000031281 Ankit Seth</h6>
                 </div>
            </div>
        )
    }
}

   export default Form;