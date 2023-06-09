import "./Home.css"
import "/src/global.css"


function Home() {

    return (
            <div className={"p-16 one-screen-wide h-full flex-1"}>

                <div className="grid grid-cols-2 h-full">
                    <div className={'h-full flex items-center w-full'}>
                        <div>
                            <h1 className={'text-start text-9xl font-semibold'}>Carl Yan</h1>
                            <h2 className={"text-5xl text-justify"}>
                                Aspiring Software Engineer
                                keen in solving problems using software solutions
                            </h2>
                        </div>

                    </div>
                    <div className={'flex items-center justify-center'}>
                        <div className={"grid grid-cols-3 gap-5"}>
                            <div className={"tile tile-orange"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>
                            <div className={"tile tile-blue"}/>

                        </div>
                    </div>
                </div>

            </div>

    )
}

export default Home
