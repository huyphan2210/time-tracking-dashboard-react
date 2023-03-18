import ellipsis from '../assets/images/icon-ellipsis.svg'
import './Action.css'

function Action(props: {
    period: string,
    title: string,
    actionImg: string,
    curHours: number,
    prevHours: number
}) {
    return (
        <div id={props.title} className='action'>
            <img loading='lazy' src={props.actionImg} alt={props.title + ' Icon'}></img>
            <div className='actionInfo'>
                <div className='title'>
                    <h2>{props.title}</h2>
                    <img src={ ellipsis } alt='Three dots'></img>
                </div>
                <div className='hours'>
                    <h1>{props.curHours}{props.curHours > 1 ? 'hrs': 'hr'}</h1>
                    <p>Last <span>{props.period}</span> - {props.prevHours}{props.prevHours > 1 ? 'hrs' : 'hr'}</p>
                </div>
            </div>
        </div>
    )
}

export default Action
