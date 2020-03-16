import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './userReq.css';
import User from '../User/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPhoneAlt, faEnvelopeOpen, faUserFriends, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'


const UserReq = () => {
    const first10 = fakeData.slice(0, 15);
    const [user, setUser] = useState(first10);



    const salary = () => {
        let add = Math.random() * 100000;
        let add2 = Math.round(add);
        return add2;
    }
    
        
    


    return (
        <div className="user-container">

            <div className="user-request">


                {user.map(user => <div className="card">{<img src={user.picture.large} />}
                    <br />
                    <div className="container"><h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <p> <FontAwesomeIcon icon={faEnvelopeOpen} /> {user.email}</p>
                        <p> <FontAwesomeIcon icon={faPhoneAlt} /> {user.phone}</p>
                        <p> <FontAwesomeIcon icon={faDollarSign} />  {salary()}
                        </p>
                        <button className="add-button"> <FontAwesomeIcon icon={faUserPlus} />
                        <br/>Add Me to Contact</button></div>
                        

                </div>)}




            </div>



            <div className="added-user">
                <div className="total-user">
                    <h2> <FontAwesomeIcon icon={faUserFriends} /><br />

                   Total Request<br />
                        <small>{user.length}</small> </h2>
                    <br />
                    <p><FontAwesomeIcon icon={faCheckCircle} /> </p>

                </div>
            </div>
        </div>
    );
};

export default UserReq;

