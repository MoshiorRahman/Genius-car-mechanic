import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart'

const Exparts = () => {
    const [exparts, setExparts] = useState([]);

    useEffect(() => {
        fetch('exparts.json')
            .then(res => res.json())
            .then(data => setExparts(data))
    }, [])

    return (
        <div className="container mt-5">
            <h2 className="text-primary p-3">Our Exparts</h2>
            <div className="row">
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;