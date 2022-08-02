
// react arrow function export component (rafce)
import React from 'react'

const testing = () => {
  return (
    <div>testing</div>
  )
}

export default testing


// react arrow function export component with prop types(rafcp)
import React from 'react'
import PropTypes from 'prop-types'

const testing = props => {
  return (
    <div>testing</div>
  )
}

testing.propTypes = {}

export default testing


// react arrow function component
import React from 'react'
import Button from '@mui/material/Button'

export const testing = () => {
  return (
    <div>testing</div>
  )
}


<Button variant="outlined" color="primary">
  button1
</Button>