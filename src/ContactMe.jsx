import "/src/global.css"

import linked from '/src/assets/linkedin.svg'
import github from '/src/assets/github.svg'
import email from '/src/assets/email.svg'

function ContactMe(){
    return(
            <div className={'flex flex-col one-screen-wide h-screen items-center justify-between p-8'}>
                <div className={'flex flex-col h-full justify-center items-center w-full p-8'}>
                    <h1 className={'text-7xl font-semibold'}>Contact Me</h1>
                    <div className={'grid grid-cols-3 gap-16 p-16'}>
                        <div className={'flex flex-col items-center'}>
                            <img src={linked} className={'w-32 h-32'}/>
                            <caption className={'text-2xl'}><a className={'link'} target={'_blank'} href={'https://www.linkedin.com/in/carl-yan/'}>LinkedIn</a></caption>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <img src={github} className={'w-32 h-32'}/>
                            <caption className={'text-2xl'}><a className={'link'} target={'_blank'} href={'https://www.github.com/mkcarl'}>GitHub</a></caption>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <img src={email} className={'w-32 h-32'}/>
                            <caption className={'text-2xl'}><a className={'link'} target={'_blank'} href={'mailto:mkcarl.dev@gmail.com'}>Email</a></caption>
                        </div>
                    </div>
                </div>
                <div className={'flex align-self-end '}>
                    <p>All rights reserved to Carl Yan @ 2023</p>
                </div>
            </div>
    )
}

export default ContactMe;
