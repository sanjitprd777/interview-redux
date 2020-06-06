import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchInterviews } from '../actions/interviewsActions'
import { Interview } from '../components/Interview'

const InterviewsPage = ({ dispatch, loading, interviews, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchInterviews())
  }, [dispatch])

  // Show loading, error, or success state
  const renderInterviews = () => {
    if (loading) return <p>Loading interviews...</p>
    if (hasErrors) return <p>Unable to display interviews.</p>
    return interviews.map(interview => <Interview key={interview.id} interview={interview} />)
  }

  return (
    <section>
        <div>
            <div className="contained">
            <div className="container-fluid">
            <h1>Listing Interviews Events</h1>
            <table>
            <tbody>
            <tr>
                <th>Subject</th>
                <th>Interviewer email</th>
                <th>Interviewee email</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Change</th>
            </tr>

            {renderInterviews()}
            
            </tbody>
            </table>
            </div>
            </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  loading: state.interviews.loading,
  interviews: state.interviews.interviews,
  hasErrors: state.interviews.hasErrors,
})

export default connect(mapStateToProps)(InterviewsPage)