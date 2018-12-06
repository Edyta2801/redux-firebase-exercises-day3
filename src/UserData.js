import React from 'react'
import { TextField } from 'material-ui'
 import { connect } from 'react-redux'
import { textChangeAction } from './state/userData'
 const UserData = (props) => (
  <div>
    <TextField
      value={props._text}
      onChange={props._textChangeAction}
    />
  </div>
)
 const mapStateToProps = state => ({
  _text: state.userData.text
})
 const mapDispatchToProps = dispatch => ({
  _textChangeAction: event => dispatch(textChangeAction(event.target.value))
})
 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData) 