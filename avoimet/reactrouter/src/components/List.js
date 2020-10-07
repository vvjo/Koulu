import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Lista = ({nimet}) => {

    const l = nimet.map(a =>
        <tr key={a.id}>
            <td>
                <p>{a.firstName}</p>
            </td>
            <td>
                <p>{a.lastName}</p>
            </td>
        </tr>
    )

    return (<tbody>{l}</tbody>)
}

const List = () => {

    const [nimet, setNimet] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/tyontekijat")
          .then(response => {
            setNimet(response.data)
          })
      }, [])

    return (
        <div className="container">
            <Table striped>
                    <Lista nimet={nimet}/>
            </Table>

        </div>
    )
}

export default List