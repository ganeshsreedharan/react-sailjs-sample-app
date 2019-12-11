import React ,{Component }from 'react';

import '../../../../../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css'
import '../../../styles/card.css'

import Header from '../../HeaderContainer/Header/Header';
import Page from '../../Page/Page'

class App extends Component {

render(){

 return (
  <div>
    <Header />

    <Page />

  </div>
)
 }
} 

export default App;
