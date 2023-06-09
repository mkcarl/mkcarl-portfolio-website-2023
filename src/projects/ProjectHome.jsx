import "/src/global.css"
function ProjectHome(){

    return(
            <div className={'flex one-screen-wide w-full h-full justify-center items-center'}>
                <div className={'flex flex-col w-2/5 items-center text-justify p-8'}>
                    <h1 className={'text-7xl font-semibold'}>Projects</h1>
                    <h2 className={'text-4xl font-light'}>
                        I like to spend time working on various projects. Mostly I work on projects that I find
                        useful towards my daily life. Most of my projects are web applications that uses technologies
                        like React, Node.js, and MongoDB. I also like to expand my knowledge and expertise into projects
                        that are related to machine learning and artificial intelligence.
                    </h2>

                </div>
            </div>

    )

}
export default ProjectHome;
