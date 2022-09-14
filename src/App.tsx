import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
