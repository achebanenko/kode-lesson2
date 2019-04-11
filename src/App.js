import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { ModalRoute, ModalContainer } from 'react-router-modal'
import 'react-router-modal/css/react-router-modal.css'
import '@ui/theme/router-modal-animation.css'
import { Normalize } from 'styled-normalize'
import { GlobalStyles, ThemeProvider, theme } from '@ui/theme'
import { Registration, Exchange, SelectCountry, Modal } from '@ui/pages'

class App extends Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    let { location } = this.props

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    let { location } = this.props

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ) // not initial render
    
    const RouterModalClasses = {
      className: 'example-modal',
      inClassName:'example-modal-in',
      outClassName: 'example-modal-out',
      backdropClassName: 'example-backdrop',
      backdropInClassName: 'example-backdrop-in',
      backdropOutClassName: 'example-backdrop-out',
      outDelay: '500',
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyles />
          <div className="App">
            <Switch location={isModal ? this.previousLocation : location}>
              <Route exact path="/" render={() => (
                <>
                  <div>
                    <Link to="/registration">Registration (with Formik)</Link>
                  </div>
                  <div>
                    <Link to="/exchange">Exchange country1 (with my Modal)</Link>
                  </div>
                  <div>
                    <Link to="/exchange">Exchange country2 (with react-router-modal)</Link>
                  </div>
                </>
              )}/>

              <Route path="/registration" component={Registration} />
              <Route exact path="/exchange" component={Exchange} />
              <Route path="/modal/:selection" component={SelectCountry} />

              <ModalRoute path="/exchange/router-modal" component={SelectCountry} parentPath='/exchange' {...RouterModalClasses} />
            </Switch>

            {
              isModal 
                ? <Route path="/modal/:selection" component={Modal} />
                : null
            }

            <ModalContainer />
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default App
