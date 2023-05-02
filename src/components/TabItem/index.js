import './index.css'

const TabItem = props => {
  const {tabDetails, onchange, isActive} = props
  const {tabId, displayText} = tabDetails

  const onclickTabitem = () => {
    onchange(tabId)
  }

  const tabItemStlyleChange = isActive ? 'tab-style-change' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabItemStlyleChange}`}
        onClick={onclickTabitem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
