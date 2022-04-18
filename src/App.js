import { MapView } from '@aws-amplify/ui-react'
import './App.css'

import { DataStore } from 'aws-amplify'
import { Hike } from './models'
import { useState, useEffect } from 'react'
import { CardB, Hikes } from './ui-components'

import { Marker, Popup } from 'react-map-gl'

function MarkerWithPopup ({ hike, latitude, longitude }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleMarkerClick = e => {
    e.originalEvent.stopPropagation()
    setShowPopup(true)
  }

  return (
    <>
      <Marker latitude={hike.lat} longitude={hike.long} onClick={handleMarkerClick} />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
          maxWidth='95%'
          closeOnMove
        >
          <CardB hike={hike} />
        </Popup>
      )}
    </>
  )
}

function App () {
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    const getHikes = async () => {
      const hikes = await DataStore.query(Hike)
      setHikes(hikes)
    }

    getHikes()
  }, [])
  return (
    <div className='container'>
      <Hikes />
      <MapView initialViewState={{
        latitude: 39.113014,
        longitude: -105.358887,
        zoom: 7
      }}
      >
        {hikes.map(hike => (
          <MarkerWithPopup
            latitude={hike.lat}
            longitude={hike.long}
            hike={hike}
            key={hike.id}
          />
        ))}
      </MapView>
    </div>
  )
}

export default App
