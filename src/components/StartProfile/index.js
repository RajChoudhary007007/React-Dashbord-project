// Write your code here.

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsDownload, BsJournalMinus} from 'react-icons/bs'

import './index.css'

class StartProfile extends Component {
  state = {
    dashbordStart: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getDashbord()
  }

  getDashbord = async () => {
    const response = await fetch(
      'https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10',
    )
    const responseData = await response.json()
    const updated = responseData.data
    this.setState({dashbordStart: updated, isLoading: false})
  }

  getRenderStartDashbord = () => {
    const {dashbordStart} = this.state

    return (
      <div className="start-dashbord-container">
        <div className="start-responsive">
          <div className="start-card">
            <div className="start-items">
              <div className="start-icon">
                <BsDownload />
              </div>
              <div className="start-details">
                <h1 className="start-heading">{dashbordStart.totalInstall}</h1>
                <p className="description">App Installed</p>
              </div>
            </div>
            <div className="start-items">
              <div className="start-icon">
                <BsJournalMinus />
              </div>
              <div className="start-details">
                <h1 className="start-heading">
                  {dashbordStart.totaluninstall}
                </h1>
                <p className="description">App Installed</p>
              </div>
            </div>
          </div>

          <div className="start-card">
            <div className="start-items">
              <div className="start-icon"></div>
              <div className="start-details">
                <h1 className="start-heading">{dashbordStart.activeinstall}</h1>
                <p className="description">ActiveInstalls</p>
              </div>
            </div>
            <div className="start-items">
              <div className="start-icon"></div>
              <div className="start-details">
                <h1 className="start-heading">{dashbordStart.aliveappusers}</h1>
                <p className="description">AliveAppsusers</p>
              </div>
            </div>
          </div>

          <div className="start-card">
            <div className="start-items">
              <div className="start-icon"></div>
              <div className="start-details">
                <h1 className="start-heading">{dashbordStart.churn}</h1>
                <p className="description">Churn Rate</p>
              </div>
            </div>
            <div className="start-items">
              <div className="start-icon"></div>
              <div className="start-details">
                <h1 className="start-heading">{dashbordStart.alivechurn}</h1>
                <p className="description">Alive Chrun Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getStartIsLoading = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.getStartIsLoading() : this.getRenderStartDashbord()}
      </div>
    )
  }
}

export default StartProfile
