import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isClicked: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {isClicked} = this.state
    const {answerText} = faqDetails

    if (isClicked) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleBtn = () => {
    this.setState(previousState => ({isClicked: !previousState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    const imageUrl = isClicked ? minusImage : plusImage
    const imageAlt = isClicked ? 'minus' : 'plus'

    return (
      <li className="faq-list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onToggleBtn}>
            <img src={imageUrl} alt={imageAlt} className="btn-image" />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
