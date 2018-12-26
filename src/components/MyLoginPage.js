import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from 'react-admin'
import { MuiThemeProvider } from '@material-ui/core/styles'
class MyLoginPage extends Component {

	constructor() {
		super()
		this.state = {
			email:'', 
			password:''
		}

		this.onChange = this.onChange.bind(this)
	}

	onChange(event) {
		console.log("changing")
		this.setState({ [event.target.name]: event.target.value });
	}

    submit = (e) => {
        e.preventDefault();
        // gather your data/credentials here
        const credentials = {
        	email: this.state.email, 
        	password: this.state.password
        };

        console.log(credentials)

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <MuiThemeProvider >
                <form onSubmit={this.submit}>
                	email: <input type="text" name="email" value={ this.state.email } onChange={ this.onChange } />
                	password: <input type="password" name="password" value={ this.state.password } onChange={ this.onChange }/>
                	<input type="submit" />
                </form>
            </MuiThemeProvider>
        );
    }
};

export default connect(undefined, { userLogin })(MyLoginPage);