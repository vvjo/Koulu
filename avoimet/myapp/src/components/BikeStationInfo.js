import React, { useState, useEffect } from 'react'
import FormControl from "react-bootstrap/FormControl"
import Dropdown from "react-bootstrap/Dropdown"
import Card from "react-bootstrap/Card"
import 'bootstrap/dist/css/bootstrap.min.css'
import bikeService from '../services/bikes'
import weatherService from '../services/weather'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const Mappi = (props) => {
    console.log(props.weather)
    console.log(props.weather.weather[0].icon)
    return (
        <Map center={props.position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={props.position}>
                <Popup>
                    <Card >
                        <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} />
                        <Card.Body>
                            <Card.Title>{props.station.name}</Card.Title>
                            <Card.Text>
                            Free bikes: {props.station.free_bikes}
                            </Card.Text>
                            <Card.Text>
                            Empty slots: {props.station.empty_slots}
                            </Card.Text>
                            <Card.Text>
                            Temperature: {Math.round((props.weather.main.temp- 273.15) * 10) / 10} &#8451;
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Popup>
            </Marker>
        </Map>
    )
}

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
)

const BikeMenu = (props) => {
    const list = props.bikes.network.stations.map((a, id) =>
        <Dropdown.Item
            key={id}
            eventKey={id + 1}
            onSelect={props.handleSelect}>{a.name}
        </Dropdown.Item>)
    return (
        <Dropdown>
            <Dropdown.Toggle >
                Citybike stations
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
                {list}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const BikeStationInfo = () => {
    const [bikes, setBikes] = useState({ network: { stations: [] } })
    const [position, setPosition] = useState([60.22408646778726, 25.075395792228694])
    const [station, setStation] = useState({latitude: 60.22408646778726, longitude: 25.075395792228694})
    const [weather, setWeather] = useState({main: {temp: 275}, weather: [{icon: "10d"}]})

    const handleSelect = (event) => {
        setStation(bikes.network.stations[event - 1])
        setPosition([bikes.network.stations[event - 1].latitude, bikes.network.stations[event - 1].longitude])
    }

    useEffect(() => {
        bikeService
            .getAll()
            .then(response => {
                setBikes(response)
            })
    }, [])

    useEffect(() => {
        weatherService
            .getAll(station)
            .then(response => {
                setWeather(response)
            })
    }, [station.name])

    return (
        <div>
            <BikeMenu bikes={bikes} handleSelect={handleSelect} />
            <Mappi position={position} station={station} weather={weather}/>
        </div>
    )
}

export default BikeStationInfo