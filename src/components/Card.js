import React from 'react';

const Card = (props) => {
    // Object Destructuring
    const { name, email, id } = props;
    return (
        <div className='tc dib bg-light-green ma2 pa3 grow br3 bw3 shadow-5'>
            <img src={ `https://www.robohash.org/${ id }?size=200x200` } alt="Robo"/>
            <h3>{ name }</h3>
            <p>{ email }</p>
        </div>
    );
};

export default Card;