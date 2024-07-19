"use client";

import React from 'react'
import LawyerSection from './lawyerProfile'
import LegalProblemSection from './legal-problems'
import PracticeArea from './practice-area'

function LawyerProfile() {
  return (
    <div className='flex flex-col items-center md:items-start md:flex-col'>
        <LawyerSection />
        <LegalProblemSection />
        <PracticeArea />
    </div>
  )
}

export default LawyerProfile
