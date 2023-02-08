import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Result.css'
import Resulttable from './Resulttable'

export default function Result() {
  return (
    <div>
      <div className='row'>
        <div className='col'></div>
        <div className='col-6'>
          <div className='border border-light'>
            <span class="pane">
              <span className='text-light'>Username</span>
              <span>Ekene Currency</span> 
            </span>

            <span class="pane">
              <span className='text-light'>Total Quiz Point</span>
              <span>50</span> 
            </span>

            <span class="pane">
              <span className='text-light'>Total Questions</span>
              <span>05</span> 
            </span>

            <span class="pane">
              <span className='text-light'>Total Attempts</span>
              <span>03</span> 
            </span>

            <span class="pane">
              <span className='text-light'>Total Erned Points</span>
              <span>30</span> 
            </span>

            <span class="pane">
              <span className='text-light'>Quiz Result</span>
              <span className='text-success'>Passed</span> 
            </span>
          </div>

          <Link to ='/'>
            <div className='restart'>
              <button type="button" class="btn btn-primary">Restart Quiz</button>
            </div>
          </Link>  

          <div className='result-table'>
            <Resulttable />       
          </div>        
        </div>
        <div className='col'></div>
      </div>
      
    </div>
  )
}
