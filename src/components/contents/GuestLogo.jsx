import React from 'react'

import { guestLogo } from '../../data/guestLogo';
import { Link } from 'react-router-dom';

const GuestLogo = () => {
    return (
        <section id='developer'>
            <h2>🤓 Welcome 우리 호갱님</h2>
            <div className="developer__inner overflow">
                {guestLogo.map((guestLogo, key) => (
                    <div className="developer" key={key}>
                        <div className="developer__img play__icon">
                            <Link to={`/not`}>
                                <img src={guestLogo.img} alt={guestLogo.name} />
                            </Link>
                        </div>
                        <div className="developer__info">
                            <Link to={`/not`}>
                                {guestLogo.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GuestLogo