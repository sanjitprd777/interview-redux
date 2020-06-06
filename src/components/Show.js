import React from 'react'
import { Link } from 'react-router-dom'

export const Show = ({ showData }) => (
    <div>
        <div className="form-group">
            <label>Title:</label>
            <label>{showData.title}</label>
        </div>

        <div className="form-group">
            <label>Interviewer email:</label>
            <label>{showData.interviewer_email}</label>
        </div>

        <div className="form-group">
            <label>Interviewee email:</label>
            <label>{showData.interviewee_email}</label>
        </div>

        <div className="form-group">
            <label>Start time:</label>
            <label>{showData.start_time}</label>
        </div>
        
        <div className="form-group">
            <label>End time:</label>
            <label>{showData.end_time}</label>
        </div>
        <br></br>
        <div className="form-group text-center">
        <Link to={`/interviews/${showData.id}/Edit`}>
            Edit   &nbsp; &nbsp;
        </Link> |  &nbsp; &nbsp;
        <Link to={`/interviews/${showData.id}/delete`}>
            Delete &nbsp; &nbsp;
        </Link> |  &nbsp; &nbsp;
        <Link to="/interviews">
            Back
        </Link>
        </div>
    </div>
)