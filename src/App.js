import './App.css';
import Genre from './components/genre/Genre';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import bootstrap from 'bootstrap';
import MovieDetails from './components/movie/MovieDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Genre />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
