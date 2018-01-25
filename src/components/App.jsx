import React from 'react'
import {
  MuiThemeProvider, AppBar, MenuItem, Drawer, IconButton
} from 'material-ui'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import { fullWhite } from 'material-ui/styles/colors'

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
            openSecondary={true}
          >
            <MenuItem onClick={this.handleClose}>one</MenuItem>
            <MenuItem onClick={this.handleClose}>two</MenuItem>
          </Drawer>
          <AppBar
            title="YASEYO"
            iconElementRight={
              <IconButton><NavigationMenu color={fullWhite} /></IconButton>
            }
            onRightIconButtonClick={this.handleToggle}
            showMenuIconButton={false}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
