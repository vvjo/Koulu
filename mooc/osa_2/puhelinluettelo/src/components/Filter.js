import React from 'react'

const Filter = (props) => {
    return (
      <form>filter shown with: <input value={props.newFilter} onChange={props.handleFilter}></input></form>
    )
  }

export default Filter