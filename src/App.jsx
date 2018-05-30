import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import getCommits from './helpers/getCommits'

import RepoInput from './components/RepoInput'
import Graph from './components/Graph'

class App extends Component {
  state = {
    commits: []
  }
  repoSet = async (repo) => {
    this.setState({
      commits: await getCommits(repo)
    })
  }
  render () {
    console.log(this.state.commits)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <RepoInput onSet={this.repoSet} />
        <Graph commits={this.state.commits} />
      </div>
    )
  }
}

export default App
