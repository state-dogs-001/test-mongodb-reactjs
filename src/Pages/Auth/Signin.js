import React, { Component } from 'react';

export default class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
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

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);
    }

    handleReset() {
        this.setState({
            email: "",
            password: "",
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card my-3">
                        <div className="card-header bg-dark text-light">
                            <h1>Sign-in</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name='email'
                                            id='email'
                                            onChange={this.changeEmail}
                                            value={this.state.email}
                                            required
                                            className='form-control'
                                        />
                                    </div>
                                    <div className="col-12">
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
                                    <div className="col-12 mt-5 mb-2 text-center">
                                        <input type="reset" value='Cancel' className='btn btn-danger mr-3' />
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
