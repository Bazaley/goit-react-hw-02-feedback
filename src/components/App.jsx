import { Component } from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  addGrade = e => {
    const { name } = e.target;
    this.setState(prev => ({ [name]: prev[name] + 1, total: prev.total + 1 }));
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      positiveFeedback: Math.round((prev.good / prev.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions addGrade={this.addGrade} />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}

        <GlobalStyles />
      </>
    );
  }
}

export default App;
