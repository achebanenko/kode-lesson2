import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { GlobalStyles, ThemeProvider, theme } from '@ui/theme'
import { Registration } from '@ui/pages'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyles />
          <div className="App">
            <Registration />
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default App
