var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState : function () {
    return {
      isLoading : false
    };
  },
  handleUpdate : function (location) {
    var that = this;

    this.setState({isLoading : true});
    openweathermap.getTemp(location).then(function (data) {
      that.setState({
        location : location,
        temp : data,
        isLoading : false
      });
    },
    function (err){
      alert(err);
      that.setState({
        isLoading : false,
      });
    });
  },
  render: function() {
    var {temp, location, isLoading} = this.state;

    function renderMessage() {
      if(isLoading){
        return (<h3 className="text-center">Fetching Weather...</h3>);
      }else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp} />);
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onUpdate={this.handleUpdate} />
        <div>
          {renderMessage()}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
