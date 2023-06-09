import {cloneElement, useEffect, useState} from "react";
import "./ProjectScroller.css"

function ProjectScroller({projects}) {
    const [page, setPage] = useState(0);
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        console.log(page)
        setTranslation(`translateX(-${page * 100}vw)`);
    }, [page])

    const nextPage = () => {
        if (page < projects.length - 1) {
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    return (
        <>
            <div id={'scroller'} className={'flex'}
                 style={{transform: translation, transition: 'transform 500ms ease-in-out'}}>
                {projects.map((project, index) => {
                        return cloneElement(project, {key: index})
                    }
                )}
            </div>
            <div className={'flex absolute bottom-16 w-screen justify-center'}>
                <div className={'flex gap-8'}>
                    <button onClick={prevPage} className={'btn'}>Prev</button>
                    <button onClick={nextPage} className={'btn'}>Next</button>

                </div>
            </div>

        </>


    )
}

export default ProjectScroller;
