import { useState, useEffect } from "react";

import './App.css';

import SightingsForm from "./SightingsForm";
import SightingsGrid from "./SightingsGrid";
import { getSightings } from "./SightingService";


function App() {

  const [birdSightings, setBirdSightings] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(()=>{
    getSightings().then((allSightings)=>{
      setBirdSightings(allSightings);
    })
  }, []);

  const addSighting = (sighting) =>{
    const temp = birdSightings.map(s =>s);
    temp.push(sighting);
    setBirdSightings(temp);
  }

  const onEdit = function(bird){
    setIsEditing(bird)
  }

  const removeSighting = (id) => {
    const temp = birdSightings.map(s =>s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBirdSightings(temp);
  }

  return (
    <>
      <SightingsForm addSighting={addSighting}/>
      <SightingsGrid sightings={birdSightings} removeSighting={removeSighting} onEdit={onEdit} isEditing={isEditing}/>
    </>
  );
}

export default App;