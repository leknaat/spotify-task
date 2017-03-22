import React from 'react'
import _ from 'lodash'
import Albums from './albums'

export default (props) => {
  return (
      <div>
        <p><b>Kate Bush Discography</b></p>
        <ol>
          {_.map(props.albums, ((album) => {
            return <Albums album={album} />
          }))}
        </ol>
        <button onClick={() => props.getAlbums()}>Pull Kate's discography out of the wiley, windy moors</button>
      </div>
    )
}

