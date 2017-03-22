import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbums } from'redux/actions/getAlbums'
import GetAlbums from 'components/getAlbums'

class AlbumContainer extends Component {
  render() {
    return (
      <GetAlbums albums={this.props.albums} getAlbums={() => this.props.dispatch(getAlbums())} />
      )
  }
}

export default connect((state) => state.getAlbums)(AlbumContainer)
