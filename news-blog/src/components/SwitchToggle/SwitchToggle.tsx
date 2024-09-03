import './SwitchToggle.css'
const SwitchToggle = ({className}:{className:string}) => {


    
    return (
        <div className='wrap__switch'>
            <label className='switch'>
                <input type="checkbox" className='switch__input' />
                <span className='switch__slider'></span>
            </label>
        </div>
    )
}

export { SwitchToggle }