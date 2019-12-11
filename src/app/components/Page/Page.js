import React  ,{ Component } from 'react';
import Messages from '../TweetList/messages'
 class Page extends Component{
    render(){
      return(<div className="col-12">
      <div className="container">
        <div className=" mt-2">
          <div className="mx-auto">
            <div className="card customer-card">
              <div className="card-body p-0">
                <ul className="nav nav-tabs">
                  <li className="nav-item"> <a className="nav-link active" href="#">All</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Mentions</a> </li>
                </ul>
                <hr className="mt-0"/>
                <Messages></Messages>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
    }
      
    
 }
export default Page;
