import Project from "./projects/Project.jsx";
import ProjectScroller from "./projects/ProjectScroller.jsx";

import crowdmon_image from '/src/assets/crowdmon showcase.png'
import voc from '/src/assets/voc showcase.png'
import banking from '/src/assets/mobile banking showcase.png'
import cloudinary from '/src/assets/skills/cloudinary.png';
import opencv from '/src/assets/skills/opencv.png';
import nextjs from '/src/assets/skills/nextjs.png';
import timescaledb from '/src/assets/skills/timescaledb.png';
import telegram from '/src/assets/skills/telegram.png';
import android from '/src/assets/skills/android.png';
import firebase from '/src/assets/skills/firebase.png';
import materialdesign from '/src/assets/skills/materialdesign.png';
import runtimeterror from './assets/RuntimeTerrorShowcase.png';
import gcp from './assets/skills/gcp.png';
import flask from './assets/skills/flask.png';
import postgres from './assets/skills/postgres.png';
import echarts from './assets/skills/echarts.png';
import cloudflare from './assets/skills/cloudflare.png';

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
                    github={'https://app.crowdmon.mkcarl.com/'}
                    key={0}
                    skills={{
                        "Cloudinary": cloudinary,
                        "NextJS": nextjs,
                        "ApacheEcharts": echarts,
                        "FirebaseAuth": firebase,
                        "OpenCV": opencv,
                        "PostgreSQL": postgres,
                        "CloudflareR2": cloudflare
                    }}
                    keywords={['fullstack', 'SSR', 'NextJS', 'Cloudinary', 'Genshin Impact', 'crowd sourcing', 'dashboard',
                    'authentication', 'OpenCV']}
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
                    keywords={['FYP', 'fullstack development', 'OpenCV', 'Computer Vision', 'dashboard', 'Telegram API', 'IoT', 'crowd monitoring']}

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
                    keywords={['Android development', 'MVVM', 'mobile app','course work']}
                    skills={{
                        "Android": android,
                        "Firebase": firebase,
                        "MaterialDesign": materialdesign
                    }}
                />,
                <Project
                    title={"RuntimeTerror Inventory Management"}
                    description={"This was a hackathon project (Dell Hack2Hire 2022) that I worked on with my team. " +
                        "The project focuses on the automated ordering system via email. " +
                        "The clients can just send an email regarding their new orders, and the system will " +
                        "parse the email and automatically add the order to the database. " +
                        "This project was reimplemented to fix up any unpolished code during the hackathon. "}
                    image={runtimeterror}
                    key={3}
                    github={'https://github.com/mkcarl/runtimeterror-nextjs'}
                    skills={{
                        "NextJS": nextjs,
                        "Firebase": firebase,
                        "MaterialDesign": materialdesign,
                        "Flask": flask,
                        "GmailAPI": gcp
                    }}
                    keywords={['hackathon', 'Gmail API', "email parsing", 'Firebase', 'fullstack development', 'Flask', 'CRUD', 'MUI', 'NextJS', 'DataGrid']}
                />,

            ]}
        />
    )
}

export default Projects;
