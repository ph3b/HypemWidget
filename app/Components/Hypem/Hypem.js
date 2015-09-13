import React from 'react';
import axios from 'axios';
import moment from 'moment'
import HypemApi from './HypemApi';
import injectTapEventPlugin from "react-tap-event-plugin";
import mui from 'material-ui';

var {
	List,
	ListItem,
	ListDivider,
	Avatar,
	rightIconMenu,
  Tabs,
  Tab

} = mui

var ThemeManager = new mui.Styles.ThemeManager()

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

class Hypem extends React.Component {
    constructor(props: any){
      super(props);
      this.state = {
        favorites: [],
        history: [],
        activeView: "favorites"
      }
    }

    componentDidMount(){
      HypemApi.getFavorites(this.props.username, 1)
        .then((data) => {
          this.setState({
            favorites: data
          })
      })

      HypemApi.getHistory(this.props.username, 1)
        .then((data) => {
          console.log(data)
          this.setState({
            history: data
          })
      })
    }

    getViewMode(){
      return this.state.activeView.charAt(0).toUpperCase() + this.activeView.slice(1);
    }

    showView(_viewString){
      var viewString = _viewString || "favorites";

      if(_viewString == "favorites"){
        this.setState({
          activeView: "favorites"
        })
      }

      if(_viewString == "history"){
        this.setState({
          activeView: "history"
        })
      }
    }

    render(){
      var favoriteList;
      var historyList;

        favoriteList = this.state.favorites.map(function(track, index){
          var lovedTime = moment(track.ts_loved, "X");
          return (
           <div key={index}>
             <ListItem
              key={index}
              leftAvatar={<Avatar src={track.thumb_url_large} />}
              rightIconButton={rightIconMenu}
       				primaryText={track.title}
       				secondaryText={
                <p>
                {track.artist} <br />
                <img height="12" src="images/timeicon.png" /> {lovedTime.fromNow() }
                </p>
              }
       				secondaryTextLines={2} />
              <ListDivider inset={true} />
            </div>
         )
       })
        
      historyList = this.state.history.map(function(track, index){
          var lovedTime = moment(track.ts_played, "X");
          return (
           <div key={index}>
             <ListItem
              key={index}
              leftAvatar={<Avatar src={track.thumb_url_large} />}
              rightIconButton={rightIconMenu}
       				primaryText={track.title}
       				secondaryText={
                <p>
                {track.artist} <br />
                <img height="12" src="images/timeicon.png" /> {lovedTime.fromNow() }
                </p>
              }
       				secondaryTextLines={2} />
              <ListDivider inset={true} />
            </div>
         )
       })

        return(
          <div style={styles.body}>
            <div>
              <Tabs tabItemContainerStyle={{backgroundColor: "#83C441", color: "#000"}} inkBarStyle={{backgroundColor: "#000"}}>
              <Tab label="Favoritter">
                <div style={{height: "100%", overflow: 'scroll'}}>
                  {favoriteList}
                  </div>
              </Tab>
              <Tab label="Historikk">
                <div>
                  {historyList}
                </div>
              </Tab>
              </Tabs>
            </div>
          </div>
        )
    }
};
var styles = {
  body : {
    backgroundColor: "#FFFFFF"
  }
}
export default Hypem;
