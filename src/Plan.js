import React from 'react'
import NavbarPlan from './NavbarPlan'
import StudyPlaner from './StudyPlaner'

const Plan = () => {
    let count = 0;
    return (
        <div className='container plan'>
            <span>&nbsp;</span>
           <NavbarPlan count={count}/>
        </div>
        
    )
}

export default Plan
