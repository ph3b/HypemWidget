import React from 'react';
import moment from 'moment';

import injectTapEventPlugin from "react-tap-event-plugin";
import mui from 'material-ui';

var {
  RaisedButton
} = mui;

var ThemeManager = new mui.Styles.ThemeManager()

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

class TrackLine extends React.Component {
  constructor(props: any){
    super(props);
  }
  render(){
    var time = moment((this.props.lovedTime || this.props.playedTime), "X")
    return(
      <div>
        <div className="row" style={styles.trackLineContainer}>
          <div className="col-xs-3"><img style={styles.image} height="100" width="100" src={this.props.imageUrl} /></div>

          <div className="col-xs-9" style={styles.metaContainer}>
            <div className="row">
              <span style={styles.trackNameText}>{this.props.trackName}</span>
            </div>

            <div className="row">
              <span style={styles.artistNameText}>{this.props.artist}</span>
            </div>

            <div className="row">
              <span style={styles.timeAgoText}><img height="12" src="images/timeicon.png" /> {time.fromNow() } </span>
            </div>

          </div>

        </div>
      </div>
    )
  }
};
var styles = {
  artistNameText : {
    fontSize: "1em"
  },
  timeAgoText : {
    fontSize: "0.8em"
  },
  trackNameText : {
    fontSize: "1.2em",
    fontWeight: "bold"
  },
  metaContainer : {
    marginLeft: 0
  },
  trackLineContainer: {
    margin: 5,
  },
  image : {
    height: 70,
    width: 70,
    borderRadius: 2
  }
}
TrackLine.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  trackName: React.PropTypes.string.isRequired,
  artist: React.PropTypes.string.isRequired,
  lovedTime: React.PropTypes.number,
  playedTime: React.PropTypes.number
}

export default TrackLine;
