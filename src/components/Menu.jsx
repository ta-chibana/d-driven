import React from 'react'
import { Drawer, MenuItem } from 'material-ui'

export default (props) => {
  return (
    <Drawer
      docked={false}
      width={200}
      open={props.open}
      openSecondary={true}
    >
      <MenuItem onClick={props.onClickClose}>one</MenuItem>
      <MenuItem onClick={props.onClickClose}>two</MenuItem>
    </Drawer>
  )
}
