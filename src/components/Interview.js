import React from 'react'
import { Link } from 'react-router-dom'

export const Interview = ({ interview }) => (
    <tr>
        <td>{interview.title}</td>
        <td>{interview.interviewer_email}</td>
        <td>{interview.interviewee_email}</td>
        <td>{interview.start_time}</td>
        <td>{interview.end_time}</td>
        <td><Link to={`/interviews/${interview.id}`}>Show</Link></td>
    </tr> 
)