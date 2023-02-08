import React from 'react'
import Questions from './Questions'
import '../styles/Quiz.css'

export default function Quiz() {

  function onPrev(){
    console.log('Previous Question')
  }

  function onNext(){
    console.log('Next Question')
  }

  return (
    <div>
      <div>
        <Questions />
      </div>      

      <div className='grid nos'>
        <button className='prev bg-info' onClick={onPrev}>Prev</button>
        <div className='no bg-light'>1</div>
        <div className='no bg-light'>2</div>
        <div className='no bg-light'>3</div>
        <button className='next bg-success' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
