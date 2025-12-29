import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

// Lazy load pages for better performance
const MainPage = lazy(() => import('./pages/MainPage'))
const AllProjects = lazy(() => import('./pages/AllProjects'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

// Track page views
function Analytics() {
  const location = useLocation()
  
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search })
  }, [location])
  
  return null
}

const App = () => {
  return (
    <Router>
      <Analytics />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <div className="text-xl">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App