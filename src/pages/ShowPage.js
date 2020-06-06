import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchShows } from '../actions/showActions'
import { Show } from '../components/Show'

const ShowPage = ({ dispatch, loading, showDatas, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchShows())
  }, [dispatch])

  // Show loading, error, or success state
  const renderShow = () => {
    if (loading) return <p>Loading interview...</p>
    if (hasErrors) return <p>Unable to display interview.</p>
    return <Show key={showDatas.id} showData={showDatas} />
  }

  return (
    <section>
        <div>
            <div className="contained">
            <div className="container-fluid">
            <h1>Showing Interview Event</h1>
            {renderShow()}
            </div>
            </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  showDatas: state.showDatas.showDatas,
  loading: state.showDatas.loading,
  hasErrors: state.showDatas.hasErrors,
})

export default connect(mapStateToProps)(ShowPage)