import React, {useRef} from 'react'
import '../styles/Main.css'
import {Link} from 'react-router-dom'

export default function Main() {
  
  const inputRef = useRef(null)


  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-8'>
          <ol className='text-left'>
            <li>You will be asked 10 questions to answer all</li>
            <li>10 points is awarded for a correct answer</li>
            <li>You can review and change answers before the quiz ends</li>
            <li>The result will be decleard at the end of the quiz</li>
          </ol> 

          <form id='form'>
            <input className='form' ref={inputRef} type="text" placeholder="Staff/Student RegNo*" />
          </form> 
        </div>
        <div className='col'></div>
      </div>        

      <div className='row'>
        <div className='col-4'></div>

        <div className="col-4">          
          <Link to = '/quiz'>
            <div className='start-btn'>Start Quiz</div>  
          </Link>                  
        </div>

        <div className='col-4'></div>
      </div>
    </div>
  )
}
