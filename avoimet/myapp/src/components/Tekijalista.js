import React, { useState, useEffect } from 'react'
import tyontekijaService from '../services/tekijat'

const Tekijalista = () => {
    const [tyontekijat, setTyontekijat] = useState({})
  
    useEffect(() => {
      tyontekijaService
        .getAll()
        .then(response => {
          setTyontekijat(response)
        })
    }, [])

    if (tyontekijat.tyontekijat) {
        const tekijalista = tyontekijat.tyontekijat.map((x) =>
            <tr key={tyontekijat.tyontekijat.indexOf(x)}>
                <td>
                    {x.firstName}
                </td>
                <td>
                    {x.lastName}
                </td>
                <td>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    {x.workNumber ? x.homeNumber + "," : x.homeNumber}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {x.workNumber}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    {x.address}
                </td>
            </tr >
        )
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Home/work phone</th>
                        <th>Address</th>
                    </tr>
                    {tekijalista}
                </tbody>
            </table>
        )
    }
    return null
}

export default Tekijalista