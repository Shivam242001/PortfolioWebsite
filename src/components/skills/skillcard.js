import React from 'react'
import './skillcard.scss'

function SkillCard({skill}) {
    return (
        <div className='skillcard'>
            <div className='skill-icon'>{skill.icon}</div>
            {/* <label className='skill-name'>{skill.name}</label> */}
            
        </div>
    );
}

export default SkillCard
