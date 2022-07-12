import { deleteSighting } from "./SightingService"
import SightingsEdit from "./SightingsEdit"

const SightingCard = ({ sighting, removeSighting, onEdit, isEditing}) => {
    const isEditingCheck = function(isEditing){
        if(sighting === isEditing){
            return true
        }
    }
    console.log(sighting);
    const handleDelete = () => {
        deleteSighting(sighting._id).then(() => {
            removeSighting(sighting._id);
        })
    }

    const handleEdit = (sighting) => {
        onEdit(sighting)
    }

    return (
        <>
            <h1>{sighting.species}</h1>
            <p>Location: {sighting.location}</p>
            <p>Date: {sighting.date}</p>
            <button onClick={handleDelete}> 🗑 </button>
            <button onClick={handleEdit}>  #128516 </button>
            {isEditingCheck ? <SightingsEdit sighting={sighting} /> : null}
            <hr></hr>
        </>
    )
}

export default SightingCard;