import SightingCard from "./SightingCard";
const SightingsGrid = ({sightings, removeSighting, onEdit, isEditing}) => {
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} onEdit={onEdit} isEditing={isEditing}/>
    });
    
    return (
        <>
            {sightingsList}
        </>
    );

}

export default SightingsGrid;