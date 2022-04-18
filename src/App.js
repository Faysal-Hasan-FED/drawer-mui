import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import CustomDrawer from './components/CustomDrawer';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Home from './components/Home';
import Message from './components/Message';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<CustomDrawer></CustomDrawer>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/message" element={<Message/>}></Route>
  <Route path="/friends" element={<Friends/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="*" element={<NotFound/>}></Route>
</Routes>

</BrowserRouter>




    </div>
  );
}

export default App;
