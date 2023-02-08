import React, {useEffect,useState} from 'react'
import '../styles/Questions.css'
import Data from '../database/Data'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    const question=Data[0]

    useEffect=(()=>{
      console.log(question)
    })

    function onSelect(){
        console.log('radio button selected')
    }

  return (
    <div className='questions text-left'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-8'>
          <h5 className='text-light'>{question.id}. &nbsp;&nbsp; {question.question}</h5>
          <br/>
          <ul key={question.id}>
            {
              question.options.map((q,i)=>(
                <li key={i}>
                  <input
                    type='radio'
                    value={true}
                    name='options'
                    id={`q${i}-option`}
                    onChange={onSelect()}
                  /> 
                  <label className='option' htmlFor={`q${i}-option`}>&nbsp; {q}</label><hr className='hrr'/>
                </li> 
              ))
            }                        
          </ul>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
