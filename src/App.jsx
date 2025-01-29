import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Dashboard from './components/Dashboard.jsx'
import CourseProgress from './components/CourseProgress.jsx'
import QuickLessons from './components/QuickLessons.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <Dashboard />
      <CourseProgress />
      <QuickLessons />
    </>
  )
}

export default App
