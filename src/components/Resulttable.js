import React from 'react'

export default function Resulttable() {
  return (
    <div>
        <table class="table table-bordered table-dark">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Attempts</th>
                <th scope="col">Erned Points</th>
                <th scope="col">Results</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='text-secondary'>Ekene Currency</th>
                    <td className='text-secondary'>03</td>
                    <td className='text-secondary'>30</td>
                    <td className='text-success'>Passed</td>
                </tr>                
            </tbody>
        </table><br/>
    </div>
  )
}
