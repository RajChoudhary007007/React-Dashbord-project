import {AiFillAndroid, AiFillApple} from 'react-icons/ai'

import './index.css'

const ItemDetails = props => {
  const {eachData} = props
  const {
    androidChurn,
    androidInstall,
    androidUninstall,
    createdAt,
    iosChurn,
    iosInstall,
    iosUninstall,
    totalchurn,
    totalinstall,
    totaluninstall,
  } = eachData

  return (
    <li className="details-main-container">
      <div className="details-response-container">
        <div className="display-item">
          <p className="item">{createdAt}</p>
        </div>
        <div className="display-item">
          <p className="item">{androidInstall}</p>
        </div>
        <div className="display-item">
          <p className="item">
            <spam>
              <AiFillAndroid />
            </spam>
            {androidUninstall}
          </p>
          <p className="item">
            <spam>
              <AiFillApple />
            </spam>
            {androidChurn}
          </p>
        </div>
        <div className="display-item">
          <p className="item">{iosChurn}</p>
        </div>
        <div className="display-item">
          <p className="item">
            <spam>
              <AiFillAndroid />
            </spam>
            {iosInstall}
          </p>
          <p className="item">
            <spam>
              <AiFillApple />
            </spam>
            {iosUninstall}
          </p>
        </div>
        <div className="display-item">
          <p className="item">{totalchurn}</p>
        </div>
        <div className="display-item">
          <p className="item">
            <spam>
              <AiFillAndroid />
            </spam>
            {totalinstall}
          </p>
          <p className="item">
            <spam>
              <AiFillApple />
            </spam>
            {totaluninstall}
          </p>
        </div>
      </div>
      <hr className="hr-line" />
    </li>
  )
}
export default ItemDetails
