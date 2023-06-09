import Project from "./projects/Project.jsx";
import placeholder from "./assets/placeholder.jpg";
import ProjectScroller from "./projects/ProjectScroller.jsx";

import crowdmon_image from '/src/assets/crowdmon showcase.png'
import react from '/src/assets/skills/reactjs.png';
import cloudinary from '/src/assets/skills/cloudinary.png';
import ffmpeg from '/src/assets/skills/ffmpeg.png';
import mongodb from '/src/assets/skills/mongodb.png';
import chartjs from '/src/assets/skills/chartjs.png';

function Projects(){
    return (
        <ProjectScroller
            projects={[
                <Project
                    title={"Crowdmon"}
                    description={"a project that aim to let many people contribute towards creating a Paimon dataset." +
                        " As collection of data, especially image data from video game may take a long time if done " +
                        "by one person, this project allows me to crowdsource the data collection process. The " +
                        "collected " +
                        "data will be used in a future project to recognize Paimon from any image and video."}
                    image={crowdmon_image}
                    github={'https://github.com/mkcarl/crowdmon-react'}
                    key={0}
                    skills={{"FFmpeg": ffmpeg, "MongoDB": mongodb, "Cloudinary":cloudinary, "ReactJS":react, "ChartJS":chartjs}}
                />,
                <Project
                    title={"Project 2"}
                    description={"This is a project"}
                    image={placeholder}
                    key={1}
                    reversed={true}
                    skills={[]}

                />,
                <Project
                    title={"Project 3"}
                    description={"This is a project"}
                    image={placeholder}
                    key={2}
                    skills={[]}
                />


            ]}
        />
    )
}
export default Projects;
