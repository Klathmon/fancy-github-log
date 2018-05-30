import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Input from '@material-ui/core/Input'
import styles from './styles.module.css'

export default class RepoInput extends Component {
  static propTypes = {
    onSet: PropTypes.function // called when the repo is set
  }
  render () {
    return (
      <div className={styles.container}>
        <p>Do stuff here...</p>
      </div>
    )
  }
}
