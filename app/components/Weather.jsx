var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openweathermap = require('openweathermap');

var Weather = React.createClass({
  getInitialState : function () {
    return {
      isLoading : false
    };
  },
  handleUpdate : function (location) {
    var that = this;

    this.setState({
      isLoading : true,
      errorMessage : undefined
    });
    openweathermap.getTemp(location).then(function (data) {
      that.setState({
        location : location,
        temp : data,
        isLoading : false
      });
    },
    function (err){
      that.setState({
        isLoading : false,
        errorMessage : err.message
      });
    });
  },
  render: function() {
    var {temp, location, isLoading, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading){
        return (<h3 className="text-center">Fetching Weather...</h3>);
      }else if (temp && location) {
        return (<WeatherMessage location={location} temp={temp} />);
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (<ErrorModal message={errorMessage}/>);
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onUpdate={this.handleUpdate} />
        <div>
          {renderMessage()}
          {renderError()}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
