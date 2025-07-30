import "../index.css";
import {IconGroup} from "./icon-group.tsx"
import profileImg from '../resources/profile.jpg';

export function Heading() {
  return (
    <div id="heading">
      <div id="profile-group">
        <img src={profileImg} alt="Profile" id="profile-img"/>
        <div id="profileInfo">
          <div id='name'>
            Neumann Davila
          </div>
          <div className="info">
            ECE Undergradutate Student @ Virginia Tech
          </div>
        </div>
      </div>
      <IconGroup id="heading-icons"/>
    </div>
  );
}