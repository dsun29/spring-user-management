
import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha'
import Layout from './Layout'

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            captchaError: null,
            acceptedCaptcha: false
        }

        this.recaptchaSucceedCallback = this.recaptchaSucceedCallback.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.renderCaptchaError = this.renderCaptchaError.bind(this);
        this.recaptchaVerifyCallback = this.recaptchaVerifyCallback.bind(this);
    }

    validateForm(e) {
        e.preventDefault();

        var foundError = false;

        var email = this.emailInput.value;
        if(email == null || email.length < 4){
            this.emailInput.setCustomValidity('Wrong email address');
            foundError = true;
        }
        if(email != null && email.length >= 4){
            var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(re.test(email) === false){
                this.emailInput.setCustomValidity('Invalid email address');
                foundError = true;
            }
        }
        var pwd = this.pwdInput.value;
        if(pwd === null || pwd.length < 8){
            this.pwdInput.setCustomValidity('Password must contain a minimu of 8 characters');
            foundError = true;
        }
        var pwd2 = this.pwd2Input.value;
        if(pwd2 === null || pwd2 !== pwd){
            this.pwd2Input.setCustomValidity('The passwords do not match');
            foundError = true;
        }

        if(this.state.acceptedCaptcha === false){
            this.setState({
                captchaError: 'Are you a human being?'
            });
            foundError = true;

        }

        if ( foundError === false ){
            console.log('No error found!!');
            this.props.register(email, pwd, null);
        }

        return foundError;
    }

    recaptchaSucceedCallback() {


    }

    recaptchaVerifyCallback(response) {

        console.log(response);
        this.setState({
            captchaError: null,
            acceptedCaptcha: true
        });
    }


    renderCaptchaError() {
        if(this.state.captchaError === null) return null;

        return (
            <span className="alert alert-danger col-sm-4">{ this.state.captchaError }</span>
        )
    }

    render() {
        return (
                <Layout>
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Register</h1>
                        <form method="post" onSubmit={this.validateForm}>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input type="email" className="form-control" id="email" required="" placeholder="email address" ref={ (input) => { this.emailInput = input }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>

                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" ref={ (input) => this.pwdInput = input } />

                            </div>

                            <div className="form-group">
                                <label htmlFor="pwd">Confirm Password:</label>

                                <input type="password" className="form-control" id="pwd" placeholder="Confirm password" ref={ (input) => this.pwd2Input = input } />

                            </div>

                            <Recaptcha
                                className="form-group"
                                sitekey="6LfCYicUAAAAAI-gQNpXzy4RR5SCDLwcVvWXWVEP"
                                render="explicit"
                                onloadCallback={this.recaptchaSucceedCallback}
                                verifyCallback={this.recaptchaVerifyCallback}
                            />

                            {
                                this.renderCaptchaError()
                            }


                            <button type="submit" className="btn btn-success btn-block">Send Me Verification Email</button>
                            <div className="login-help">
                                <a href="login.html">Sign In</a>
                            </div>

                        </form>

                    </div>
                </Layout>
        )
    }
}
