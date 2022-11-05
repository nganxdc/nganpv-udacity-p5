import React, { Component } from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'

import Auth from './auth/Auth'
import { EditTodo } from './components/EditTodo'
import { LogIn } from './components/LogIn'
import { NotFound } from './components/NotFound'
import { Todos } from './components/Todos'
import { Button, Image } from 'semantic-ui-react'
import { ContainerLayout, NavigationLayout, PrimaryButton, Logo } from './layouts/home'

export interface AppProps {}

export interface AppProps {
  auth: Auth
  history: any
}

export interface AppState {}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin() {
    this.props.auth.login()
  }

  handleLogout() {
    this.props.auth.logout()
  }

  render() {
    return (
      <ContainerLayout>
        <Router history={this.props.history}>
          {this.generateMenu()}

          {this.generateCurrentPage()}
        </Router>
      </ContainerLayout>
    )
  }

  generateMenu() {
    return (
      <NavigationLayout>
        <Logo>
          <>
            <img style={{
              width: '72px',
              height: '48px'
            }} src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png' />
            <Link to="/" />
          </>
        </Logo>

        {this.logInLogOutButton()}
      </NavigationLayout>
    )
  }

  logInLogOutButton() {
    if (this.props.auth.isAuthenticated()) {
      return (
        <PrimaryButton name="logout" onClick={this.handleLogout}>
          Log Out
        </PrimaryButton>
      )
    } else {
      return null
    }
  }

  generateCurrentPage() {
    if (!this.props.auth.isAuthenticated()) {
      return <LogIn auth={this.props.auth} />
    }

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={props => {
            return <Todos {...props} auth={this.props.auth} />
          }}
        />

        <Route
          path="/todos/:todoId/edit"
          exact
          render={props => {
            return <EditTodo {...props} auth={this.props.auth} />
          }}
        />

        <Route component={NotFound} />
      </Switch>
    )
  }
}
