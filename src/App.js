import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="pricing py-5">
      <div className="container">
        <div className="row">
        {/* Free Tier */}
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Single User</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>5GB Storage</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Unlimited Public Projects</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Community Access</span></li>
              <li className="text-muted"><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Unlimited
                Private Projects</li>
              <li className="text-muted"><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Dedicated
                Phone Support</li>
              <li className="text-muted"><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Free Subdomain</li>
              <li className="text-muted"><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
            <button type="button" className="btn btn-primary text-uppercase">Primary</button>
            </div>
            </div>
          </div>
        </div>
        {/* pluse tire */}

        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">PLUS</h5>
            <h6 className="card-price text-center">$9<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Single User</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>5GB Storage</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Unlimited Public Projects</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Community Access</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Free Subdomain</li>
              <li className="text-muted"><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
            <button type="button" className="btn btn-primary text-uppercase">Primary</button>
            </div>
            </div>
          </div>
        </div>
        {/* Pro Tier */}
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">PRO</h5>
            <h6 className="card-price text-center">$49<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Single User</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>5GB Storage</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Unlimited Public Projects</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faCheck"/>Community Access</span></li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Free Subdomain</li>
              <li><span class="fa-li"><FontAwesomeIcon icon="faXmark"/></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
            <button type="button" className="btn btn-primary text-uppercase">Primary</button>
            </div>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>
  );
}

export default App;
