import {Component} from "react";
import {Section} from "./Section/Section";
import {Feedback} from "./Feedback/Feedback";
import {Statistics} from "./Statistics/Statistics";
import {Notification} from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateGood = () => {
    this.setState({good: this.state.good + 1})
  }

  updateNeutral = () => {
    this.setState({neutral: this.state.neutral + 1})
  }

  updateBad = () => {
    this.setState({bad: this.state.bad + 1})
  }

  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotal())
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <div style={{display: 'flex'}}>
            <Feedback type="GOOD" action={this.updateGood}/>
            <Feedback type="NEUTRAL" action={this.updateNeutral}/>
            <Feedback type="BAD" action={this.updateBad}/>
          </div>
        </Section>
        <Section title="Statistics">
          {
            this.countTotal() > 0 ?
              (
                <Statistics good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotal()}
                            positivePercentage={this.positivePercentage()}/>
              )
              :
              (
                <Notification message="There is no feedback"/>
              )
          }
        </Section>
      </div>
    )
  }
}

export default App;
