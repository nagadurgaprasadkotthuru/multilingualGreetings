import './index.css'

const Tab = props => {
  const {tabDetails, onChangeTab, activeTab} = props
  const {id, buttonText} = tabDetails
  const changeTab = () => onChangeTab(id)
  const active = activeTab === id ? 'active' : ''
  return (
    <li className="tab-element">
      <button className={`button ${active}`} type="button" onClick={changeTab}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tab
