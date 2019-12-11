import React ,{ Component }from 'react';
import avatar from '../../images/face1.jpg'
class Tweet extends Component{
  componentWillMount(){
    this.props.onLoad();
  }
  
  render(){
    return (
      <ul className="list-group">
              <a className="list-group-item">
              <div className="bmd-list-group-col">
                <p className="list-group-item-heading"><i className="zmdi zmdi-twitter text-primary mr-0 pt-2 pl-1"></i> 
                <img className="img-xs rounded-circle" src={avatar} alt="Profile image"/> </p>
                <p className="list-group-item-text pt-2 pl-4">Recent Tweet from Srishti Mathur <strong className="text-dark mr-2">#TeamShreya</strong> <span className="text-muted">4h </span></p>
                <div className="border-box">
                  <p className="pb-2"><strong>Srishti Mathur #TeamShreya</strong> @SrishtiM</p>
                  <p>Lorem Ipsum Dollor Sett inmit</p>
                </div>
              </div>
              </a> 
            </ul>
    );
  }
};

export default Tweet;
