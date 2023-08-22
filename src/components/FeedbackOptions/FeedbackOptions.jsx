import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) {
  render() {
    const zzz = 'neutral';
    const { state, countGood, countBad, countNeutral } = this.props;
    return (
      <ul>
        <li>
          <button type="button" onClick={() => countGood(zzz)}>
            good
          </button>
        </li>
        <li>
          <button type="button" onClick={countNeutral}>
            neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={countBad}>
            bad
          </button>
        </li>
      </ul>
    );
  }
}
