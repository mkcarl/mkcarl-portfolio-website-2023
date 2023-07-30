import {Tooltip} from "react-tooltip";
import React from "react";

function Project({title, description, image, github, skills, visible, reversed, keywords=[]}){
    return (
        <div className={`h-screen w-screen ${visible ? 'hidden': ''} flex justify-center`}>
            <div className={`flex ${reversed ? 'flex-row-reverse' : 'flex-row'} `}>
                <div className={'h-full w-1/2 flex items-center justify-center basis-1/2'}>
                    <img src={image} alt={title} className={'w-3/5 h-auto rounded-lg '}/>

                </div>
                <div className={'flex justify-center flex-col basis-1/2 p-16 text-justify'}>
                    <h1 className={'text-7xl font-semibold'}>{title}</h1>
                    <h2 className={'text-2xl'}><a className={'link'} target={"_blank"} href={github}>{title}</a> is {description}</h2>
                    <p className={'highlight font-semibold'}>Key words: {keywords.join(', ')}</p>
                    <div className={'flex gap-8 p-4'}>
                        {
                            Object.entries(skills).map(([skillName, skillImage]) => {
                                return (
                                    <>
                                        <img src={skillImage} alt={skillName} className={'w-16 h-16'} id={`${skillName.toLowerCase()}`}/>

                                        <Tooltip
                                            anchorSelect={`#${skillName.toLowerCase()}`}
                                            content={skillName}
                                            place={'bottom'}
                                        />
                                    </>
                                )

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Project;
