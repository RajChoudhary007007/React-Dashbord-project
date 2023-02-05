// Write your code here.
import {BiCog} from 'react-icons/bi'
import {
  MdArticle,
  MdAssignmentInd,
  MdMissedVideoCall,
  MdChangeHistory,
  MdSettingsBackupRestore,
  MdOutlinePermIdentity,
  MdNotifications,
} from 'react-icons/md'

import './index.css'

const LeftComponent = () => (
  <div className="profile-container">
    <div className="header-container">
      <div className="profile">
        <div className="profile-logo"></div>
        <h1 className="heading">WOW</h1>
      </div>
      <div className="display-bord">
        <BiCog />
      </div>
    </div>
    <div className="dashbord-list-container">
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdArticle />
        </li>
        <li className="display-bord">Dashbord</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdAssignmentInd />
        </li>
        <li className="display-bord">Wow User</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdMissedVideoCall />
        </li>
        <li className="display-bord">Video Clip</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdChangeHistory />
        </li>
        <li className="display-bord">Reported Container</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdSettingsBackupRestore />
        </li>
        <li className="display-bord">Categery</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdArticle />
        </li>
        <li className="display-bord">Info Page</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdArticle />
        </li>
        <li className="display-bord">FAQ</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdNotifications />
        </li>
        <li className="display-bord">Push Notification</li>
      </div>
      <div className="dashbord-display-item">
        <li className="display-bord">
          <MdOutlinePermIdentity />
        </li>
        <li className="display-bord">Interanal User</li>
      </div>
    </div>
  </div>
)
export default LeftComponent
