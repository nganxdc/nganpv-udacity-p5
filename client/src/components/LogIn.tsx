import * as React from 'react'
import Auth from '../auth/Auth'
import { Button } from 'semantic-ui-react'
import { LoginTypeLayout, LoginButton } from '../layouts/home'

interface LogInProps {
  auth: Auth
}

interface LogInState {}

export class LogIn extends React.PureComponent<LogInProps, LogInState> {
  onLogin = () => {
    this.props.auth.login()
  }

  onAppleLogin = () => {
    alert('Funtion will be released in near future!')
  }

  render() {
    return (
      <LoginTypeLayout>
        <h1 style={{marginBottom: '42px'}}>ToDo Application</h1>
        <LoginButton onClick={this.onLogin}>
          Sign in
        </LoginButton>
        <p style={{
          margin: '16px 0',
        }}>OR</p>
        <LoginButton style={{background: 'white', color: 'black', border: '1px solid gray'}} onClick={this.onAppleLogin}>
          Sign in with Apple
        </LoginButton>
      </LoginTypeLayout>
    )
  }
}
