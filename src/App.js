import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomDrawer from './components/CustomDrawer';
import Home from './components/Home';
import Message from './components/Message';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<CustomDrawer></CustomDrawer>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
  <Route path="/message" element={<Message></Message>}></Route>
  <Route path="*" element={<NotFound></NotFound>}></Route>
</Routes>

</BrowserRouter>




    </div>
  );
}

export default App;
