import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Common from './pages/Common';

import Advice from './pages/Advice';
import Backend from './pages/Backend';
import Frontend from './pages/Frontend';
import Fullstack from './pages/Fullstack';
import Home from './pages/Home';
import Other from './pages/Other';
import References from './pages/References';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Common />}>

              <Route index element={<Home />} />
              <Route path='advice' element={<Advice />} />
              <Route path='frontend' element={<Frontend />} />
              <Route path='backend' element={<Backend />} />
              <Route path='fullstack' element={<Fullstack />} />
              <Route path='other' element={<Other />} />
              <Route path='references' element={<References />} />

            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
