import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import Title from './Title'
import UploadYourData from './UploadYourData'
import UploadYourData1 from './UploadYourData1'
import Section from './Section1'
import VideoBackground from './VideoBackground'
import OurTeamSection from './OurTeamSection'
import Testimonials from './TestimonialCard'
import JoinWaitlist from './JoinWaitlist'
import Loader from './Loader'
import PrivateByDesign from './PrivateByDesign'
import TestimonialSlider from './TestimonialSlider'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // Matches animation duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && <>
        <Title />
        <HeroSection />
        <UploadYourData1 />
        <UploadYourData />
        <Section />
        <VideoBackground />
        <OurTeamSection />
        <Testimonials />
        <JoinWaitlist />
        <PrivateByDesign />
      </>}
    </>
  )
}

export default App
