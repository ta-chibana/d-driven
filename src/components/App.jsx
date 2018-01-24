import React from 'react'
import { MuiThemeProvider, AppBar, MenuItem, Drawer } from 'material-ui'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
          >
            <MenuItem onClick={this.handleClose}>one</MenuItem>
            <MenuItem onClick={this.handleClose}>two</MenuItem>
          </Drawer>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick={this.handleToggle}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
