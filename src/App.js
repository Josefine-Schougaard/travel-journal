import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Data from './Data';

function App() {
  //mapping the data
  const travelCards = Data.map(travel => {
    return (
      <Cards 
        img = {travel.imageUrl}
        location = {travel.location}
        maps = {travel.googleMapsUrl}
        title = {travel.title}
        startDate = {travel.startDate}
        endDate = {travel.endDate}
        desc = {travel.description}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      {travelCards}
    </div>
  );
}

export default App;
