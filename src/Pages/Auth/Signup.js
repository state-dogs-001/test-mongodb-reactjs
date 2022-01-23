import React, { Component } from 'react';

import axios from 'axios';

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            password: "",
            password_confirm: ""
        }

        this.changeFullName = (event) => {
            this.setState({
                fullName: event.target.value
            })
        }

        this.changeEmail = (event) => {
            this.setState({
                email: event.target.value
            })
        }

        this.changePassword = (event) => {
            this.setState({
                password: event.target.value
            })
        }

        this.changePasswordConfirm = (event) => {
            this.setState({
                password_confirm: event.target.value
            })
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();

        const password = this.state.password
        const password_confirm = this.state.password_confirm

        const data = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
        }

        if (password === password_confirm) {
            try {
                const response = await axios.post("http://localhost:4000/app/signup", data)
                console.log(response.data);
                // After post axios success
                this.setState({
                    fullName: "",
                    email: "",
                    password: "",
                    password_confirm: ""
                })
            } catch (error) {
                console.log(error.message);
            }
        } else {
            console.log("Password not match");
        }
    }

    handleReset() {
        this.setState({
            fullName: "",
            email: "",
            password: "",
            password_confirm: ""
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card my-3">
                        <div className="card-header bg-dark text-light">
                            <h1>Sign-up</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                                <div className="row">
                                    <div className="col col-12">
                                        <label htmlFor="fullName">Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            onChange={this.changeFullName}
                                            value={this.state.fullName}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="col col-12">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={this.changeEmail}
                                            value={this.state.email}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="col col-12">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={this.changePassword}
                                            value={this.state.password}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="col col-12">
                                        <label htmlFor="password_confirm">Password Confirm</label>
                                        <input
                                            type="password"
                                            name="password_confirm"
                                            id="password_confirm"
                                            onChange={this.changePasswordConfirm}
                                            value={this.state.password_confirm}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="col col-12 text-center mt-5 mb-2">
                                        <input type="reset" value="Cancel" className='btn btn-danger mr-3' />
                                        <input type="submit" className='btn btn-success' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


