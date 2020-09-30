import React, {useState} from 'react'
import { Map, Marker, Popup, TileLayer, GeoJSON, CircleMarker } from 'react-leaflet'
import Card from "react-bootstrap/Card"


const Mappi = (props) => {
    const [state, setState] = useState(props.routing)
    console.log(state)

    var toupper = props.weather.weather[0].description
    var startp = [props.station.latitude, props.station.longitude]
    const description = toupper.charAt(0).toUpperCase() + toupper.slice(1);
    var circlePos = [0,0]
    if(!props.routing){
        var size = props.route.features[0].geometry.coordinates.length
        circlePos = [...props.route.features[0].geometry.coordinates[size-1]]
        circlePos.reverse()
    }

    return (
        props.routing ?
        <div>
            <Map center={startp} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={startp}>
                    <Popup>
                        <Card >
                            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} />
                            <Card.Body>
                                <Card.Title>{props.station.name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text>
                                    Free bikes: {props.station.free_bikes}
                                </Card.Text>
                                <Card.Text>
                                    Empty slots: {props.station.empty_slots}
                                </Card.Text>
                                <Card.Text>
                                    Temperature: {Math.round((props.weather.main.temp - 273.15) * 10) / 10} &#8451;
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Marker>
            </Map>
            </div>
            :
            <div>
            <Map center={startp} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <GeoJSON data={props.route} />
                <Marker position={startp}>
                    <Popup>
                        <Card >
                            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} />
                            <Card.Body>
                                <Card.Title>{props.station.name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <Card.Text>
                                    Free bikes: {props.station.free_bikes}
                                </Card.Text>
                                <Card.Text>
                                    Empty slots: {props.station.empty_slots}
                                </Card.Text>
                                <Card.Text>
                                    Temperature: {Math.round((props.weather.main.temp - 273.15) * 10) / 10} &#8451;
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Marker>
                <CircleMarker center={circlePos} />
            </Map>
            </div>
    )
}

export default Mappi