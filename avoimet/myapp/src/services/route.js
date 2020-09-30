//https://api.openrouteservice.org/v2/directions/cycling-regular?api_key=your-api-key&start=8.681495,49.41461&end=8.687872,49.420318
import axios from 'axios'

const getRoute = async (props) => {
    //console.log(props)
    //console.log(props.start.lon)
    const res = await axios.get("https://api.openrouteservice.org/v2/directions/cycling-regular?api_key=" +
    "5b3ce3597851110001cf6248d9be14a9f3dc4009b0f171853a9a4b1c" +
    "&start=" + props.start.lon + "," + props.start.lat + "&end=" + props.end.lon + "," + props.end.lat)
    //console.log(res)
    return res.data
}

const getGeo = async (props) => {
    //console.log(props)
    const token = "5b3ce3597851110001cf6248d9be14a9f3dc4009b0f171853a9a4b1c"
    const config = {
      headers: { Authorization: token }
    }
    const req = {
        "coordinates": [props.start, props.end]
    }
    const res = await axios.post("https://api.openrouteservice.org/v2/directions/cycling-regular/geojson", req, config)
    //console.log(res)
    return res.data
}

export default { getRoute, getGeo }