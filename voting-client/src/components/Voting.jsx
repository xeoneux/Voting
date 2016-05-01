import React from 'react';

import Winner from './Winner.jsx';

export default React.createClass({
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
            : this.getPair().map(entry => {
              return (
                <button key={entry}
                  onClick={
                    () => this.props.vote(entry)
                  }>
                  <h1>{entry}</h1>
                  {
                    this.hasVotedFor(entry)
                      ? (<div className="label">Voted</div>)
                      : null
                  }
                </button>
              );
            })
        }
      </div>
    );
  }
});