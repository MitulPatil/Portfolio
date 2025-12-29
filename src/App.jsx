import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const MainPage = lazy(() => import('./Pages/MainPage'))
const AllProjects = lazy(() => import('./Pages/AllProjects'))
const AboutPage = lazy(() => import('./Pages/AboutPage'))

const App = () => {
  return (
    <Router>
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