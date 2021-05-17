import React,{Component} from 'react';
import ProfileImage from '../assets/profile.png'

class Profile extends Component{

    render(){
        return (
         <div className="profileName">
             <img src={ProfileImage} alt="Profile" className="profilePic"/>
             <h1>{this.props.data.title}</h1>
             <p>
             {this.props.data.description}
             </p>
         </div>
        )
    }
    
}
export function a(){};
export default Profile;