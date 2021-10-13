import React from 'react';

const Expart = ({ expart }) => {
    const { img, name, expertize } = expart;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expart;