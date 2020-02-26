import React from 'react';
import './Body.css';

const Body = ()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <ul className="list-group mylist">
                        <li className="list-group-item text-center"><a href="Car">Cars</a></li>
                        <li className="list-group-item text-center"><a href="Bike">Bike</a></li>
                        <li className="list-group-item text-center"><a href="Scooter">Scooter</a></li>
                        <li className="list-group-item text-center"><a href="Auto">Auto</a></li>
                        <li className="list-group-item text-center"><a href="Truck">Truck</a></li>
                        <li className="list-group-item text-center"><a href="Bus">Bus</a></li>
                        <li className="list-group-item text-center"><a href="Aeroplane">Aeroplane</a></li>
                        <li className="list-group-item text-center"><a href="Rocket">Rocket</a></li>
                    </ul>
                </div>


                <div className="col-md-9">
                    <p className="text-center" id="para">
                        Welcomme to world of transport..!!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Body;