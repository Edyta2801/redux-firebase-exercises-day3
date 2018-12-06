import React from 'react'
import { TextField, RaisedButton } from 'material-ui'

import { connect } from 'react-redux'
import { textChangeAction, saveTextToDbAsyncAction } from './state/userData'

const UserData = (props) => (
  <div>
    <TextField
      value={props._text}
      onChange={props._textChangeAction}
    />
    <RaisedButton 
      primary={true}
      label={'SAVE'}
      onClick={props._saveTextToDbAsyncAction}
    />
  </div>
)

const mapStateToProps = state => ({
  _text: state.userData.text
})

const mapDispatchToProps = dispatch => ({
  _textChangeAction: event => dispatch(textChangeAction(event.target.value)),
  _saveTextToDbAsyncAction: () => dispatch(saveTextToDbAsyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData)