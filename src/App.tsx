import { useEffect, useState } from 'react';
import Action from './components/Action';
import { ActionInterface } from './interface/action';
import data from './data.json';
import './App.css'

import jeremy from './assets/images/image-jeremy.png';
import workImg from './assets/images/icon-work.svg';
import playImg from './assets/images/icon-play.svg';
import studyImg from './assets/images/icon-study.svg';
import exerciseImg from './assets/images/icon-exercise.svg';
import socialImg from './assets/images/icon-social.svg';
import selfCareImg from './assets/images/icon-self-care.svg';

function App() {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [actions, setActions] = useState<ActionInterface[]>();

  const getActions = () => {
    const newActions: ActionInterface[] = data.map(value => {
        const actionImg = getActionImg(value.title)
        return {
          actionImg,
          title: value.title,
          hours: period === 'daily' ? value.timeframes.daily : period === 'weekly' ? value.timeframes.weekly : value.timeframes.monthly
        }
    })
    setActions(newActions);
  }
  
  const getActionImg = (title: string) => {
    switch (title) {
      case 'Work':
        return workImg;
      case 'Play':
        return playImg;
      case 'Study':
        return studyImg;
      case 'Exercise':
        return exerciseImg;
      case 'Social':
        return socialImg;
      default:
        return selfCareImg;
    }
  }

  useEffect(() => {
    getActions();
  }, [period])

  return (
    <div className='dashboard'>
      <div className='reportee'>
        <div className='info'>
          <img src={ jeremy } alt='Jeremy'></img>
          <div>
            <label htmlFor='reportee'><small>Report for</small></label>
            <h1 id='reportee'>Jeremy Robson</h1>
          </div>
        </div>
        <div className='period'>
          <p onClick={() => setPeriod('daily')}>Daily</p>
          <p onClick={() => setPeriod('weekly')}>Weekly</p>
          <p onClick={() => setPeriod('monthly')}>Monthly</p>
        </div>
      </div>
      {actions?.map(action => <Action key={action.title} actionImg={action.actionImg} period={period === 'daily' ? 'day' : period.replace('ly', '')} title={action.title} curHours={action.hours.current} prevHours={action.hours.previous}></Action>)}
    </div>
  )
}

export default App
