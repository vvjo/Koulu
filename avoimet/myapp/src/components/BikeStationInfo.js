import React, { useState, useEffect } from 'react'
import Dropdown from "react-bootstrap/Dropdown"
import 'bootstrap/dist/css/bootstrap.min.css'
import bikeService from '../services/bikes'
import weatherService from '../services/weather'
import routeService from '../services/route'
import FormControl from "react-bootstrap/FormControl"
import Mappi from './Mappi'

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
                {props.station.name}
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
                {list}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const WhereToMenu = (props) => {
    const list = props.bikes.network.stations.map((a, id) =>
        <Dropdown.Item
            key={id}
            eventKey={id + 1}
            onSelect={props.handleTo}>{a.name}
        </Dropdown.Item>)
    return (
        <Dropdown>
            <Dropdown.Toggle >
                {props.station.name}
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
                {list}
            </Dropdown.Menu>
        </Dropdown>
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

const BikeStationInfo = () => {
    const [bikes, setBikes] = useState({ network: { stations: [] } })
    const [endStation, setEndStation] = useState({ latitude: 60.22408646778726, longitude: 25.075395792228694, name: "Where to" })
    const [station, setStation] = useState({ latitude: 60.22408646778726, longitude: 25.075395792228694, name: "From where" })
    const [weather, setWeather] = useState({ main: { temp: 275 }, weather: [{ icon: "10d", description: "" }] })
    const [route, setRoute] = useState({ bbox: [0, 0] })
    const [routeCoords, setRouteCoords] = useState([{ start: [25.075395792228694, 60.22408646778726], end: [25.031385306773423, 60.18795810306132] }])
    const [routing, setRouting] = useState(true)

    const handleSelect = (event) => {
        setStation(bikes.network.stations[event - 1])
        let routeState = {...routeCoords, start:[bikes.network.stations[event - 1].longitude, bikes.network.stations[event - 1].latitude] }
        setRouteCoords(routeState)
        //console.log(routeState)
    }

    const handleTo = (event) => {
        //console.log({ end: [bikes.network.stations[event - 1].longitude, bikes.network.stations[event - 1].latitude] })
        setEndStation(bikes.network.stations[event - 1])
        let routeState = {...routeCoords, end:[bikes.network.stations[event - 1].longitude, bikes.network.stations[event - 1].latitude] }
        //console.log(routeState)
        setRouteCoords(routeState)
        routeService
            .getGeo(routeState)
            .then(response => {
                setRoute(response)
            })
            .then(() => {
                setRouting(false)
            })
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
            <BikeMenu bikes={bikes} station={station} handleSelect={handleSelect} />
            <WhereToMenu bikes={bikes} station={endStation} handleTo={handleTo} />
            <Mappi routing={routing} station={station} weather={weather} route={route} />
        </div>
    )
}

export default BikeStationInfo