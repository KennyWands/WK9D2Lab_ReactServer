import { editSighting } from "./SightingService"
import React, {useState} from 'react'

const SightingsEdit = ({sighting, isEditing}) => {
    const [formData, setFormData] = useState({
        species: sighting.species,
        location: sighting.location,
        date: sighting.date,
    })

    const onSubmit = (e) => {
        e.preventDefault()
        editSighting(formData).then((data) => {
            updateSighting(data)
        })
        isEditing(null)
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <input
            onChange={onChange}
            type="text"
            value={formData.species}
            />
            <input type="text" value={formData.location}/>
            <input type="text" value={formData.date}/>
            <input type="submit" value="update" id="update"/>
        </form>
        </>
    )
}

export default SightingsEdit