import React from 'react'
import LawyerSection from './lawyerProfile'
import LegalProblemSection from './legal-problems'
import PracticeArea from './practice-area'

function LawyerProfile() {
  return (
    <div className='flex flex-row'>
        <LawyerSection />
        <LegalProblemSection />
        <PracticeArea />
    </div>
  )
}

export default LawyerProfile