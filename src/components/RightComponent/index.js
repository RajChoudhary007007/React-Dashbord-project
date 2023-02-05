import {Component} from 'react'
import Loader from 'react-loader-spinner'

import ItemDetails from '../ItemDetails'

import './index.css'

class ListComponent extends Component {
  state = {
    detailsList: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getListDashbord()
  }

  getListDashbord = async () => {
    const apiUrl =
      'https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10 '
    const response = await fetch(apiUrl)
    const update = await response.json()
    const newData = update.data
    const updatedData = newData.data.map(eachData => ({
      androidChurn: eachData.android_churn,
      androidInstall: eachData.android_install,
      androidUninstall: eachData.android_uninstall,
      createdAt: eachData.created_At,
      iosChurn: eachData.ios_churn,
      iosInstall: eachData.ios_install,
      iosUninstall: eachData.ios_uninstall,
      totalchurn: eachData.totalchurn,
      totalinstall: eachData.totalinstall,
      totaluninstall: eachData.totaluninstall,
    }))
    this.setState({detailsList: updatedData, isLoading: false})
    console.log(updatedData)
  }

  getRenderListItems = () => {
    const {detailsList} = this.state

    return (
      <div className="main-container">
        <div className="responsiv-List-container">
          <div className="selector-container-header">
            <div className="selector-container">
              <p className="selector-description">Show</p>
              <select className="selector-item">
                <option className="items">10</option>
                <option className="items">50</option>
                <option className="items">100</option>
                <option className="items">500</option>
                <option className="items">1000</option>
              </select>
              <p className="selector-description">Entries</p>
            </div>
            <div className="date-container">
              <input type="date" />
            </div>
          </div>

          <div className="table-container">
            <li className="table-item">Date</li>
            <li className="table-item">Day Installed</li>
            <li className="table-item">Platform</li>
            <li className="table-item">Day Uninstalls</li>
            <li className="table-item">Platform</li>
            <li className="table-item">Churn Rate</li>
            <li className="table-item">Churn Platform</li>
          </div>
          <uL className="details-container">
            {detailsList.map(eachData => (
              <ItemDetails eachData={eachData} key={eachData.iosChurn} />
            ))}
          </uL>
        </div>
      </div>
    )
  }

  getLodingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="list-main-container">
        {isLoading ? this.getLodingView() : this.getRenderListItems()}
      </div>
    )
  }
}
export default ListComponent
