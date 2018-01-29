import React from 'react'
import {
  MuiThemeProvider, AppBar, IconButton, RaisedButton, SvgIcon
} from 'material-ui'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import ImagePhotoCamera from 'material-ui/svg-icons/image/photo-camera'
import { fullWhite } from 'material-ui/styles/colors'
import Menu from 'components/Menu'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSelectedFile = this.handleSelectedFile.bind(this)
  }

  handleToggle() {
    this.setState({ open: !this.state.open })
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleSelectedFile() {
    this.refs.fileSelector.click()
  }

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Menu open={this.state.open} onClickClose={this.handleClose} />
          <AppBar
            title="YASEYO"
            iconElementRight={
              <IconButton><NavigationMenu color={fullWhite} /></IconButton>
            }
            onRightIconButtonClick={this.handleToggle}
            showMenuIconButton={false}
          />
          <input
            type="file"
            accept="image"
            style={{ display: 'none' }}
            ref="fileSelector"
          />
          <IconButton>
            <ImagePhotoCamera onClick={this.handleSelectedFile} />
          </IconButton>
        </>
      </MuiThemeProvider>
    )
  }
}
