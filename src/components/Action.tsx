import ellipsis from '../assets/images/icon-ellipsis.svg'
import './Action.css'

function Action() {
    return (
        <div className='action'>
            <div className='actionImg'>

            </div>
            <div className='actionInfo'>
                <div className='title'>
                    <h2>Work</h2>
                    <img src={ ellipsis } alt='Three dots'></img>
                </div>
                <div className='hours'>
                    <h1>32hrs</h1>
                    <p>Last Week - 36hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Action
