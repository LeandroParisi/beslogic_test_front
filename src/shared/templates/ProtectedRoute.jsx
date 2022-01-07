import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import routes from 'shared/libs/routes/routes'
import { Route, useHistory } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory()

  useEffect(() => {
    // Todo: Authentication
  }, [history.location.pathname])

  return (
    <>
      <Route
        {...rest}
        render={
      (props) => <Component {...rest} {...props} />
    }
      />
    </>
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
}

export default ProtectedRoute
