import React from 'react';
import Auth from './Auth'
import UserData from './UserData'


const App = (props) => (
  <div>
    <Auth />
    <div>
      <UserData/>
    </div>
  </div>
)

export default App