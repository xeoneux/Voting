import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from './Winner.jsx';
import Vote from './Vote.jsx';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  getPair: function () {
    return this.props.pair || [];
  },
  isDisabled: function () {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function (entry) {
    return this.props.hasVoted === entry;
  },
  render: function () {
    return (
      <div className="voting">
        {
          this.props.winner
            ? (<Winner ref="winner" winner={this.props.winner} />)
            : (<Vote {...this.props} />)
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);