import jeremy from './assets/images/image-jeremy.png'

import { useState } from 'react'
import Action from './components/Action'
import './App.css'

function App() {

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
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
      <Action></Action>
      <Action></Action>
      <Action></Action>
      <Action></Action>
      <Action></Action>
      <Action></Action>
  {/* Work
  5hrs <!-- daily -->
  Previous - 7hrs <!-- daily -->
  32hrs <!-- weekly -->
  Previous - 36hrs <!-- weekly -->
  103hrs <!-- monthly -->
  Previous - 128hrs <!-- monthly -->

  Play
  1hr <!-- daily -->
  Previous - 2hrs <!-- daily -->
  10hrs <!-- weekly -->
  Previous - 8hrs <!-- weekly -->
  23hrs <!-- monthly -->
  Previous - 29hrs <!-- monthly -->

  Study
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 7hrs <!-- weekly -->
  13hrs <!-- monthly -->
  Previous - 19hrs <!-- monthly -->

  Exercise
  1hr <!-- daily -->
  Previous - 1hr <!-- daily -->
  4hrs <!-- weekly -->
  Previous - 5hrs <!-- weekly -->
  11hrs <!-- monthly -->
  Previous - 18hrs <!-- monthly -->

  Social
  1hr <!-- daily -->
  Previous - 3hrs <!-- daily -->
  5hrs <!-- weekly -->
  Previous - 10hrs <!-- weekly -->
  21hrs <!-- monthly -->
  Previous - 23hrs <!-- monthly -->

  Self Care
  0hrs <!-- daily -->
  Previous - 1hr <!-- daily -->
  2hrs <!-- weekly -->
  Previous - 2hrs <!-- weekly -->
  7hrs <!-- monthly -->
  Previous - 11hrs <!-- monthly --> */}
    </div>
  )
}

export default App
