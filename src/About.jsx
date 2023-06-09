import "/src/global.css"
import linux from '/src/assets/linux.png'
import aws from '/src/assets/aws.png'
import computervision from '/src/assets/computer vision.png'
import firebase from '/src/assets/firebase.jpg'
import git from '/src/assets/git.png'
import nodejs from '/src/assets/nodejs.png'
import react from '/src/assets/react.png'
import sql from '/src/assets/sql.png'

import {Tooltip} from "react-tooltip";

function About(){
    return(
            <div className={"p-16 h-full one-screen-wide flex-1"}>
                <div className="grid grid-cols-2 h-full">

                    <div className={'flex items-center justify-center'}>
                        <div className={"w-full flex flex-col gap-8"}>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-2/12 bg-red-500 rounded-md"}></div>
                                <div className={"h-4 w-5/12 bg-blue-500 rounded-md"}></div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-4/12 bg-blue-500 rounded-md"}></div>
                                <div className={"h-4 w-4/12 bg-green-500 rounded-md"}></div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-3/12 bg-blue-500 rounded-md"}></div>
                                <div className={"h-4 w-1/12 bg-black rounded-md"}></div>
                                <div className={"h-4 w-3/12 bg-yellow-500 rounded-md"}></div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-4/12 bg-red-500 rounded-md"}></div>
                                <div className={"h-4 w-1/12 bg-green-500 rounded-md"}></div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-2/12 bg-blue-500 rounded-md"}></div>
                                <div className={"h-4 w-2/12 bg-blue-500 rounded-md"}></div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div className={"h-4 w-6/12 bg-red-500 rounded-md"}></div>
                                <div className={"h-4 w-2/12 bg-yellow-500 rounded-md"}></div>
                            </div>
                        </div>
                    </div>

                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'p-16'}>
                            <h1 className={'text-7xl font-semibold'}>About me</h1>
                            <h2 className={'text-2xl text-justify'}>
                                I am Carl, graduated from Asia Pacific University, Malaysia in BSc(Hons) in Computer
                                Science specialised in Intelligent Systems. I have a strong curiosity for problem
                                solving and I always try to integrate useful software solutions into my daily life.
                                I am proficient in several programming languages, Linux environments, cloud computing
                                environments and some knowledge in mobile app development. I have spent my time in
                                builidng solutions including web-application for my personal project, Discord bot for
                                daily use and end-to-end IoT based solution for my final year project.
                            </h2>

                        </div>
                        <div className={'flex flex-col w-full gap-8'}>
                            <div className={'flex justify-evenly'}>
                                <img className={'w-16 h-16 rounded-lg'} src={linux} alt='Linux' id={'linux'}/>
                                <Tooltip content={"Linux"} anchorSelect={'#linux'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={git} alt='Git' id={'git'}/>
                                <Tooltip content={"Git Version control"} anchorSelect={'#git'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={sql} alt='SQL' id={'sql'}/>
                                <Tooltip content={"SQL"} anchorSelect={'#sql'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={firebase} alt='Firebase' id={'firebase'}/>
                                <Tooltip content={"Firebase"} anchorSelect={'#firebase'}/>
                            </div>
                            <div className={'flex justify-evenly'}>
                                <img className={'w-16 h-16 rounded-lg'} src={aws} alt='AWS' id={'aws'}/>
                                <Tooltip content={"Cloud computing"} anchorSelect={'#aws'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={nodejs} alt='NodeJS' id={'nodejs'}/>
                                <Tooltip content={"NodeJS"} anchorSelect={'#nodejs'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={react} alt='ReactJS' id={'react'}/>
                                <Tooltip content={"ReactJS"} anchorSelect={'#react'}/>
                                <img className={'w-16 h-16 rounded-lg'} src={computervision} alt='Web' id={'computervision'}/>
                                <Tooltip content={"Computer Vision"} anchorSelect={'#computervision'}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default About;
