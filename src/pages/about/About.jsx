import React from 'react'
import AboutHero from './components/AboutHero'
import SkillsSection from './components/SkillsSection'
import PersonalStory from './components/PersonalStory'
import PersonalInterests from './components/PersonalInterests'

function About() {
  return (
    <div>
        <AboutHero/>
        <PersonalStory/>
        <SkillsSection/>
        <PersonalInterests/>
    </div>
  )
}

export default About