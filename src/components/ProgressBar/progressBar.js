import React,{ useState, useEffect } from 'react'
import './progressBar.css'

const ProgressBar = ({ skill, percentage }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(percentage);
    }, [percentage]);
  return (
    <div className="skill-container">
    <div className="progress-bar-container">
            <div className="skill-label">{skill}</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${width}%` }}>
                    <span className="progress-text">{`${width}%`}</span>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ProgressBar
