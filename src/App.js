//App.js

// PseudoCode
// Set up .ENV file to store our API key
// Set up _REDIRECTS file

// Create a Component to hold our initial Axios call in a useEffect
// Store our API DATA in STATE
// LOOP over the data and display a movie poster on the page

// Use the LINK to make our POSTERS change the URL on click
// Use ROUTES to LISTEN for the URL change and DISPLAY the appropriate COMPONENT

import Catalogue from "./components/Catalogue";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Hackflix!</h1>

      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/movie/:movieID" element={ <MovieDetails /> } />
      </Routes>
      
    </>
  );
}

export default App;
