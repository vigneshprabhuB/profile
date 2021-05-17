import React, { Component } from 'react';



class SocilaProfiles extends Component {
   
    render() {
        return (
            <div className="socialProfiles"><h1>Social Profiles</h1>

                <div className="socialProfileWrapper">
                    {
                       this.props.profiles.map((s) => this.dispalyContentent(s))
                    }
                </div></div>
        )
    }


    dispalyContentent(social) {
        return (
            <div className="socialProfile" key={social.id}>
                <div >{social.title}</div>
                <a href={social.link}>
                    <img src={social.image} alt="Profile" className="socialProfileImage" />
                </a>

            </div>
        )
    }


}

export default SocilaProfiles;  