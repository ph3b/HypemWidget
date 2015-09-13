import React from 'react';

class MenuButtons extends React.Component {
  constructor(props: any){
    super(props);
  }
  goToFavs(){
    this.props.goToView("favorites")
  }
  goToHistory(){
    this.props.goToView("history")
  }
  render(){
    return(
      <div className="btn-group btn-group-justified">
        <a href="#" onClick={this.goToFavs.bind(this)} className="btn btn-info">Favoritter</a>
        <a href="#" onClick={this.goToHistory.bind(this)} className="btn btn-info">Historikk</a>
      </div>
    )
  }
};

var styles = {
  button: {
    width : "100%"
  }
}
MenuButtons.propTypes = {
  goToView: React.PropTypes.func.isRequired,
}

export default MenuButtons
