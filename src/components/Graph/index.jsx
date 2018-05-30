import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GraphVis from 'react-graph-vis'

import styles from './styles.module.css'

const options = {
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'RL'
    }
  }
}

export default class Graph extends Component {
  static propTypes = {
    commits: PropTypes.arrayOf(PropTypes.object)
  }
  buildGraph = (commits) => {
    return {
      nodes: Object.values(commits).map(({ sha, commit: { message } }, index) => {
        return {
          id: sha,
          label: `${message.substr(0, 5)}...`,
          title: message
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
    console.log(nodes)
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
