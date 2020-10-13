import React from 'react'
import {useAxiosGet} from "../Hooks/HttpRequests";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MapStyles from "../Components/MapStyles";
import { Marker } from '@react-google-maps/api';

function Map() {
    const containerStyle = {
        width: '90vw',
        height: '90vh',
        margin: "auto",
    };

    const center = {
        lat: 4.2105,
        lng: 101.9758
    };

    const position = {
        lat: 3.1390,
        lng: 101.6869
    }

    const options = {
        styles : MapStyles,
        disableDefaultUI: true,
        zoomControl: true
    }

    const url = "https://api.covid19api.com/country/malaysia/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2020-04-10T00:00:00Z";

    let summary = useAxiosGet(url)
    console.log(summary)
    let content = null

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const [markers, setMarkers] = React.useState([]);
    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    React.useState(() => {
        setMarkers( () => [
            {
                lat: 3.8126,
                lng: 103.3256
            },
            {
                lat: 2.1896,
                lng: 102.2501
            },
            {
                lat: 1.4854,
                lng: 103.7618
            },
            {
                lat: 5.3117,
                lng: 103.1324
            }]);
    });

    // if(summary.error){
    //     content = <div>
    //         <div className="bg-blue-300 mb-2 p-3">
    //             If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
    //         </div>
    //         <div className="bg-red-300 p-3">
    //             There was an error please refresh or try again later.
    //         </div>
    //     </div>
    // }

    // if(summary.loading){
    //     content = <Loader></Loader>
    // }

    console.log(summary.data)
    if(summary.data){
        content =
            <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={8}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    // options={options}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {/*<Marker*/}
                    {/*    onLoad={onLoad}*/}
                    {/*    position={position}*/}
                    {/*/>*/}

                    {summary.data.map((marker) => (
                        <Marker
                            key={`${marker.Lat}-${marker.Lon}-${marker.Date}`}
                            position={{ lat: Number(marker.Lat), lng: Number(marker.Lon) }}
                            onClick={() => {
                                // setSelected(marker);
                            }}
                            onLoad={onLoad}
                        />
                    ))}

                </GoogleMap>
            </LoadScript>
            </div>
    }

    return (
        <div className="">
            {content}
        </div>
    )
}

export default Map