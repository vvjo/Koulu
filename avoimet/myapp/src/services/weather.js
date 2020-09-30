import axios from 'axios'

const getAll = async (props) => {
    //console.log(props)
    //console.log("http://api.openweathermap.org/data/2.5/weather?lat=" + props.latitude + "&lon=" + props.longitude + "&appid=6cc21d008f9553a845ff19536a5344b2")
    const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + props.latitude + "&lon=" + props.longitude + "&appid=6cc21d008f9553a845ff19536a5344b2")
    //console.log(res)
    return res.data
}

export default { getAll }