import React from 'react';
import Hypem from './Components/Hypem/Hypem'

import injectTapEventPlugin from "react-tap-event-plugin";
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager()

injectTapEventPlugin();

var {
	List,
	ListItem,
	ListDivider,
	Avatar,
	rightIconMenu

} = mui;

class App extends React.Component {
	constructor(props){
		super(props);

	}
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

	render() {
		return (
    	<div className="container-fluid" style={styles.body}>
				<div className="row" style={styles.hypemContainer}>
					<Hypem username="mattiden"/>
				</div>
      </div>
			)
	}
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
var styles = {
	hypemContainer: {
	},
	body : {
		backgroundColor: "#FFF"
	}
}
React.render(<App />, document.getElementById('app'));
