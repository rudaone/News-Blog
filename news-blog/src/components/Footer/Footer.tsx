import { SwitchToggle } from '../SwitchToggle'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <span className='footer__text'>©2024 Blogologo</span>
            <div className='footer__theme-wrap'>
                <span className='footer__theme-text'>Dark theme</span>
                <SwitchToggle className='footer__theme-switch'/>
            </div>
        </div>

   
    )
}

export { Footer }