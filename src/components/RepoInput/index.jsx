import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styles from './styles.module.css'

export default class RepoInput extends Component {
  static propTypes = {
    onSet: PropTypes.function // called when the repo is set
  }
  state = {
    repo: ''
  }
  onChangeInput = ({ target: { value } }) => {
    this.setState({ repo: value })
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.onSet(this.state.repo)
  }
  render () {
    return (
      <div className={styles.container}>
        <form onSubmit={this.onSubmit}>
          <TextField
            className={styles.input}
            value={this.state.repo}
            onChange={this.onChangeInput}
            label='torvalds/linux'
          />
          <Button variant='raised' className={styles.button} onClick={this.onSubmit}>
            Submit
          </Button>
        </form>
      </div>
    )
  }
}
