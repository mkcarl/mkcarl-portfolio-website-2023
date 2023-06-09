import './App.css'
import Home from "./Home.jsx";
import ReactFullpage from "@fullpage/react-fullpage";
import About from "./About.jsx";
import ProjectHome from "./projects/ProjectHome.jsx";
import ContactMe from "./ContactMe.jsx";
import logo from '/src/assets/mkcarl logo.svg'
import Projects from "./Projects.jsx";

function App() {

  return (
      <>
          <img src={logo} alt={'logo'} className={"absolute top-8 left-8 w-16 h-16"}/>
        <ReactFullpage
            scrollingSpeed={1000}
            navigation={true}
            navigationPosition={"right"}
            render={({state, fullpageApi}) => {
                return(
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Home/>
                        </div>
                        <div className="section">
                            <About/>
                        </div>
                        <div className={"section"}>
                            <ProjectHome/>
                        </div>
                        <div className={"section"}>
                            <Projects/>

                        </div>
                        <div className={"section"}>
                            <ContactMe/>
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }
            }
        />
      </>
  )
}

export default App
