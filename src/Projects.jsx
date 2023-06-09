import Project from "./projects/Project.jsx";
import placeholder from "./assets/placeholder.jpg";
import ProjectScroller from "./projects/ProjectScroller.jsx";

import crowdmon_image from '/src/assets/crowdmon showcase.png'
import voc from '/src/assets/voc showcase.png'
import banking from '/src/assets/mobile banking showcase.png'

import react from '/src/assets/skills/reactjs.png';
import cloudinary from '/src/assets/skills/cloudinary.png';
import ffmpeg from '/src/assets/skills/ffmpeg.png';
import mongodb from '/src/assets/skills/mongodb.png';
import chartjs from '/src/assets/skills/chartjs.png';
import opencv from '/src/assets/skills/opencv.png';
import nextjs from '/src/assets/skills/nextjs.png';
import timescaledb from '/src/assets/skills/timescaledb.png';
import telegram from '/src/assets/skills/telegram.png';
import android from '/src/assets/skills/android.png';
import firebase from '/src/assets/skills/firebase.png';
import materialdesign from '/src/assets/skills/materialdesign.png';

function Projects() {
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
                    skills={{
                        "FFmpeg": ffmpeg,
                        "MongoDB": mongodb,
                        "Cloudinary": cloudinary,
                        "ReactJS": react,
                        "ChartJS": chartjs
                    }}
                />,
                <Project
                    title={"Vision Of Crowd"}
                    description={"my final year project. This project covers end-to-end process from reading " +
                        "camera feed, processing the image and performing people detection, finally information is " +
                        "sent to the database where it is displayed on a web dashboard. This project is a " +
                        "proof-of-concept for a crowd monitoring system to be integrated into a smart campus environment " +
                        "where it can be used for crowd safety control and intelligent resource management."}
                    image={voc}
                    github={'https://github.com/mkcarl/VisionOfCrowd'}
                    key={1}
                    reversed={true}
                    skills={{
                        "OpenCV": opencv,
                        "NextJS": nextjs,
                        "TimescaleDB": timescaledb,
                        "TelegramAPI": telegram
                    }}

                />,
                <Project
                    title={"Mobile Banking"}
                    description={"a project for my Mobile App Engineering class. This project mainly focuses on" +
                        " the frontend implementation of a mobile banking app. It is built in native Android " +
                        "and applies concepts like the MVVM architecture and Android lifecycle." +
                        " This app also connects to a firebase backend to perform some simple banking operations " +
                        "including login and transfer for demonstration purposes."}

                    image={banking}
                    key={2}
                    github={'https://github.com/mkcarl/MobileBanking'}
                    skills={{
                        "Android": android,
                        "Firebase": firebase,
                        "MaterialDesign": materialdesign
                    }}
                />


            ]}
        />
    )
}

export default Projects;
