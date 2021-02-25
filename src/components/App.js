import React, { Component } from 'react'
import Header from './header'
import List from './list'
import Pick from './pick'

class App extends Component {
  render () {
    return <section className="App">
      <div className="container">
        <h3 className="block_title">摘水果</h3>
        <Header />
        <List />
        <Pick />
      </div>
    </section>
  }
}

export default App
