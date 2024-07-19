import React,{ useRef, useEffect, useState } from "react";
import "./skill.css";
import ProgressBar from "../ProgressBar/progressBar";
import { Fade } from 'react-awesome-reveal';

const Skill = () => {
  const skills = [
    { skill: "HTML", percentage: 100 },
    { skill: "CSS", percentage: 85 },
    { skill: "JavaScript", percentage: 90 },
    { skill: "React", percentage: 75 },
    { skill: "Git", percentage: 75 },
    { skill: "SQL", percentage: 75 },
    { skill: "Java", percentage: 50 },
  ];
    const skillsRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the Skills section is visible
            }
        );
        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }
           // Clean up the observer
           return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);
  return (
    <section id="skills">
    <div className="skills-container" ref={skillsRef}>
    <Fade direction="left">
    <h2 className="skills-header">My <span>Skills</span></h2>
    {skills.map((skill, index) => (
        <ProgressBar key={index} skill={skill.skill} percentage={animate ? skill.percentage : 0} />
    ))}
    </Fade>
</div>
</section>
  );
};

export default Skill;
