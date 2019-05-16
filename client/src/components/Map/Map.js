import React, { Component } from 'react';
import GoogleMapReact from "google-map-react";

export default class Map extends Component {

    setMapProperties(map, maps){
        const coordsLength = this.props.coords.length
        const origin = this.props.coords[0]
        const destination = this.props.coords[coordsLength-1]
        let waypoints = null
        if(coordsLength > 2){
             waypoints = [...this.props.coords]
            .splice(1, coordsLength - 2)
            .map(waypoint => {return {
                location: {lat: waypoint.latitude, 
                    lng:waypoint.longitude},
                stopover: true
            }}) 
        }
        const directionsService =  new maps.DirectionsService();
        const directionsDisplay =  new maps.DirectionsRenderer();

        const directionRequest = {
            origin: {
                lat: origin.latitude,
                lng: origin.longitude
            },
            destination: {
                lat: destination.latitude,
                lng: destination.longitude
            },
            waypoints, 
            travelMode: "DRIVING"
        }

        /* const directionRequest = {
            origin: {
                lat: 41.3977381,
                lng: 2.190471916
            },
            destination: "Madrid, ES",
            travelMode: "DRIVING"
        } */

        directionsService.route(
            directionRequest,
            function(response, status){
                if(status === 'OK'){
                    directionsDisplay.setDirections(response)
                } else {
                    window.alert("Directions request failed due to: " + status)
                }
            }
        )

        directionsDisplay.setMap(map)
    }
    
  render() {
      const defaultProps = {
        center: {
            lat: 59.59,
            lng: 14
        },
        zoom: 1
      }

    return (
      <div style={{height: "100%", width: "100%"}}>
        <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onGoogleApiLoaded={({map, maps}) => this.setMapProperties(map, maps)}>
        </GoogleMapReact>  
      </div>
    )
  }
}



// api key google maps AIzaSyCX_aQdF5ZCgOMtJYwiw8-94rxPxvJQBic