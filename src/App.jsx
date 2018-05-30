import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import RepoInput from './components/RepoInput'
class App extends Component {
  state = {
    repo: undefined
  }
  repoSet = (repo) => {
    this.setState({ repo })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <RepoInput onSet={this.repoSet} />
      </div>
    )
  }
}

export default App
