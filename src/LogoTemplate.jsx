import logo from "/src/assets/mkcarl logo.svg"
import "./LogoTemplate.css"
function LogoTemplate({children}){
    return (
        <div className={'content flex'}>
        <img className={"w-16 h-16 logo-position"} src={logo} alt="mkcarl-logo"/>
            <div>
            {children}

            </div>
        </div>
    )
}

export default LogoTemplate;
