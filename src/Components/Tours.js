import React, { useState } from 'react';
import petra from "./images/petra.jpg";
import wadiRum from "./images/WadiRum.jpg";
import jarash from "./images/jarash.jpg";
import castleMountain from "./images/Castle-Mountain.jpg";
import romanAmphitheater from "./images/Roman-amphitheater.jpg";
import husseinGardens from "./images/Al-Hussein-Public-Parks.jpg";


// Here we create the function to show the details that relate to each tourism place
function TourDetails({ place })
 {
 
  const detailsAboutPlace = {
    'Petra': 'Petra is a famous archaeological site in Jordan\'s southwestern desert.The city of Petra, capital of the Nabataean Arabs, is one of the most famous archaeological sites in the world, it is Located 240 km south of the capital Amman and 120 km north of the red sea town of Aqaba',
    'Wadi Rum': 'Wadi Rum is a protected desert wilderness in southern Jordan. Wadi Rum Desert is famed for its link to T.E. Lawrence the original “Lawrence of Arabia”. Along with Prince Feisal bin Al-Hussein, he made his base here during the Arab Revolt of 1917-1918. At the center of Wadi Rum village is the Desert Police fort. Built in 1932 the village remained nothing more than a cluster of tents until the 1980s.',
    'Jerash': 'Jerash is a city in northern Jordan, famous for its ancient Roman ruins Jerash was then deserted until it reappeared in the historical record at the beginning of Ottoman rule in the area during the early 16th century. In the census of 1596, it had a population of 12 Muslim households.',
    'Castle Mountain': 'Castle Mountain is a mountain in Jordan, famous for its castle ruins.The Citadel has a long history of occupation by many great civilizations.[1] Evidence of inhabitance since the Neolithic period has been found and the hill was fortified during the Bronze Age (1800 BCE). The hill became the capital of the Kingdom of Ammon sometime after 1200 BCE',
    'Roman amphitheater':'The Roman Amphitheatre is located in the eastern part of the Jordanian capital, Amman. It is specifically at the foot of Jabal Al-Joufah, on a hill opposite the Amman Citadel. A Greek inscription on one of the pillars indicates that this amphitheater was built in honour of Emperor Antoninus Pius ',
    'Hussein Gardens': '.Al Hussein Park is a public park in Amman, Jordan that continues to be under construction. The project attempts to create a landmark for the city by including a cultural village, sports fields, memorial building, historical passageway, decorated gardens, amphitheater, circular yard, Royal Automobile Museum, King Hussein Mosque'};

    // Here we return the card that show the name and details about the tourism place.
    //The details are retrieved from the detailsAboutPlace object using the place.name as the key.
  return (
    <div className='container12'>
      <h4 className='mt-2 heading'>{place.name}</h4>
      <p className='description'>{detailsAboutPlace[place.name]}</p>
    </div>
  );
}



// Tours function that contains the tourism places information and display them as a cards by using map to display the name and image of the place.
//And the onClick event of each card calls the handleClick function to update the selectedPlace state with the corresponding place object.
function Tours()
 {
  const places = [
    {
      id: 1,
      Image: petra,
      name: "Petra",
      info: "Some information about the Petra",
      price: 10
    },
    {
      id: 2,
      Image: wadiRum,
      name: "Wadi Rum",
      info: "Some information about the Wadi Rum",
      price: 25
    },
    {
      id: 3,
      Image: jarash,
      name: "Jerash",
      info: "Some information about the Jerash",
      price: 18
    },
    {
      id: 4,
      Image: castleMountain,
      name: "Castle Mountain",
      info: "Some information about the Castle Mountain",
      price: 15
    },
    {
      id: 5,
      Image: romanAmphitheater,
      name: "Roman amphitheater",
      info: "Some information about the Roman amphitheater",
      price: 15
    },
    {
      id: 6,
      Image: husseinGardens,
      name: "Hussein Gardens",
      info: "Some information about the Hussein Gardens",
      price: 18
    }
  ];

  const [tourismPlaces] = useState(places);
  const [selectedPlace, setSelectedPlace] = useState(null);

  function handleClick(place)
  {
    setSelectedPlace(place);
  }

  const filterPlaces = selectedPlace ? [selectedPlace] : tourismPlaces; //It displays the info and price properties of the place object only if there is a selectedPlace.

  return (
    <div className='row text-center'>
      <div className='card-container d-flex justify-content-center flex-wrap'>
        {filterPlaces.map((place) => (
          <div className='card mb-4 mx-2' key={place.id} onClick={() => handleClick(place)}>
            <div className='card-header'>{place.name}</div>
            <div className='card-body'>
              <img src={place.Image} alt={place.name} className='card-img-top' style={{ width: '100%', height: 'auto' }} />
              {selectedPlace && (
                <>
                  <div className='card-text mb-3'>{place.info} and we get {place.price} JOD per a trip </div>
                  <div className='card-text'></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {selectedPlace && <TourDetails place={selectedPlace}/>}
      </div>
    </div>
  );
  }

  export default Tours;
