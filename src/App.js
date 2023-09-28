import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Product from './Pages/Product';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Analytics from './Pages/Analytics';
function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />}>
            </Route>
            <Route path='/product' exact element={<Product />}>
            </Route>
            <Route path='/settings' exact element={<Settings />}>
            </Route>   <Route path='/analytics' exact element={<Analytics />}>
            </Route>

          </Routes>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App;
