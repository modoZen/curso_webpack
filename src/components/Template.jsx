import React from 'react';
import github from '@images/github.png';
import twitter from '@images/twitter.png';
import instagram from '@images/instagram.png';

const Template = ({data}) => {
    return (
    <div className="About">
        <div className="card">
            <div className="card_details">
            <div className="card_photo center circle">
                <img src={data?.sprites.front_default} alt={data.sprites.front_default} />
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{enableBackground: 'new -580 439 577.9 194'}}
                xmlSpace="preserve">
                <circle cx="50" cy="50" r="40" />
                </svg>
            </div>
            <p className="card_title">Hi, My name is</p>
            <p className="card_value">{data.name}</p>
            </div>
            <div className="card_userdata">
            <ul>
                {data.types.map((type,index)=><img key={index} src={`https://veekun.com/dex/media/types/en/${type.type.name}.png`} />)}
            </ul>
            </div>
            <div className="card_social">
            <a href="https://twitter.com/gndx">
                <img src={twitter} />
            </a>
            <a href="https://github.com/gndx">
                <img src={github} />
            </a>
            <a href="https://instagram.com/gndx">
                <img src={instagram} />
            </a>
            </div>
        </div>
    </div>
    )
}

export default Template;


