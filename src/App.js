import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import StartPage from './pages/StartPage/StartPage';
import Movies from './components/Movies/Movies';
import { AddMovie } from './components/AddMovies/AddMovie';
import TicketBanner from './components/TicketBanner/TicketBanner';
import TicketBooking from './components/TicketBooking/TicketBooking';
import BookingPage from './components/BookingPage/BookingPage';
import SeatBooking from './components/SeatBooking/SeatBooking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/explore/home/chennai' element={<Header/>}></Route>
        <Route path='/' element={<StartPage/>}></Route>
        <Route path='/allMovies' element={<Movies/>}></Route>
        <Route path='/movies' element={<AddMovie/>}></Route>
        <Route path='/ticketingBanner' element={<TicketBanner/>}></Route>
        <Route path='/ticketBooking' element={<TicketBooking/>}></Route>
        <Route path='/bookingSelection' element={<BookingPage/>}></Route>
        <Route path='/seatBooking' element={<SeatBooking/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
