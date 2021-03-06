import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GraphVis from 'react-graph-vis'

import styles from './styles.module.css'

const LABEL_SIZE = 30
const options = {
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'LR',
      sortMethod: 'directed',
      parentCentralization: false,
      edgeMinimization: false
    }
  }
}

export default class Graph extends Component {
  static propTypes = {
    commits: PropTypes.object
  }
  buildGraph = (commits) => {
    return {
      nodes: Object.values(commits).map(({ sha, commit: { message } }, index) => {
        const label = (message.length > LABEL_SIZE ? `${message.substr(0, LABEL_SIZE - 3)}...` : message)
        return {
          id: sha,
          label
        }
      }),
      edges: Object.values(commits).reduce((edges, { sha: childSha, parents }) => {
        for (let { sha: parentSha } of parents) {
          edges.push({
            from: parentSha,
            to: childSha
          })
        }
        return edges
      }, [])
    }
  }
  onNodeSelect = ({ nodes }) => {
    if (nodes.length === 1) { // do nothing if we select more or less than 1 node
      window.open(this.props.commits[nodes[0]].html_url, '_blank')
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <GraphVis
          graph={this.buildGraph(this.props.commits)}
          options={options}
          style={{ height: '600px' }} // The lib doesn't support className!?
          events={{ select: this.onNodeSelect }}
        />
      </div>
    )
  }
}
