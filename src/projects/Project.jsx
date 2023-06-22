import {Tooltip} from "react-tooltip";

function Project({title, description, image, github, skills, visible, reversed}){
    return (
        <div className={`h-screen w-screen ${visible ? 'hidden': ''} flex justify-center`}>
            <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center`}>
                <div className={'w-full lg:w-1/2 flex items-center justify-center'}>
                    <img src={image} alt={title} className={'w-3/5 h-auto rounded-lg '}/>

                </div>
                <div className={'flex justify-center flex-col lg:basis-1/2 p-12 lg:px-16 text-justify'}>
                    <h1 className={'text-3xl font-semibold'}>{title}</h1>
                    <h2 id className={'project-description text-xl max-h-48 overflow-scroll lg:overflow-auto lg:max-h-max'}><a className={'link'} target={"_blank"} rel={'noreferrer'} href={github}>{title}</a> is {description}</h2>
                    <div className={'flex flex-wrap gap-4 lg:gap-8 p-4'} >
                        {
                            Object.entries(skills).map(([skillName, skillImage]) => {
                                return (
                                    <>
                                        <img src={skillImage} alt={skillName} className={'w-12 lg:w-16 h-12 lg:h-16'} id={`${skillName.toLowerCase()}`}/>

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
