import './App.css'
import Body from './Body';
import Header from './Header';
import Basket from './Basket';
import { StateProvider } from "./ContextAPI";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='signin' element={<><Login /></>} />
            <Route index element={<><Header /> <Body /></>} />
            <Route path='basket' element={<><Header /> <Basket /></>} />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;