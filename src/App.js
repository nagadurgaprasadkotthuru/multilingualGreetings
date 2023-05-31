import {Component} from 'react'

import Tab from './components/Tab'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onChangeTab = id => {
    this.setState({activeTab: id})
  }

  renderTabsView = () => {
    const {activeTab} = this.state
    return (
      <ul className="tabs-container">
        {languageGreetingsList.map(eachItem => (
          <Tab
            tabDetails={eachItem}
            key={eachItem.id}
            onChangeTab={this.onChangeTab}
            activeTab={activeTab}
          />
        ))}
      </ul>
    )
  }

  renderWishView = () => {
    const {activeTab} = this.state
    const activeWishList = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    const activeWish = activeWishList[0]
    return (
      <div className="wish-container">
        <img
          className="wish"
          alt={activeWish.imageAltText}
          src={activeWish.imageUrl}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        {this.renderTabsView()}
        {this.renderWishView()}
      </div>
    )
  }
}

export default App
