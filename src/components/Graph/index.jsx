import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GraphVis from 'react-graph-vis'

import styles from './styles.module.css'

const options = {
  layout: {
    hierarchical: true,
    direction: 'LR'
  }
}

export default class Graph extends Component {
  static propTypes = {
    commits: PropTypes.arrayOf(PropTypes.object)
  }
  buildGraph = (commits) => {
    return {
      nodes: commits.map(({ sha }) => ({ id: sha, label: `${sha.substr(0, 5)}...` })),
      edges: commits.reduce((edges, { sha: child, parents }) => {
        for (let parent in parents) {
          edges.push({
            from: parent,
            to: child
          })
        }
        return edges
      }, [])
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <GraphVis
          graph={this.buildGraph(this.props.commits)}
          options={options}
        />
      </div>
    )
  }
}
