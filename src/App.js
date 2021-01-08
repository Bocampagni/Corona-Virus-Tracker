import React from 'react';
import Styles from './App.module.css';
import { Menu,  Cards, Charts, CountryPicker } from './Components';
import { getMethod } from './api';
import coronaImage from './image.png';
import News from './Components/News/News'
import socketIOClient from "socket.io-client";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleCountryChange = this.handleCountryChange.bind(this)
  }
  
  state = {

    data: {},
    country: "",
    status: "Chart",
    tweets: [],

  }
  

  async componentDidMount() {
    const data = await getMethod();
    this.setState({data: data});
    const socket = socketIOClient('http://localhost:3001/');
    this.setState(data);
    socket.on('connect', () => {
      console.log("Socket Connected");
      socket.on("tweets", data => {
        console.info(data);
        this.setState({tweets: [...this.state.tweets, data]})
      });
    });
    socket.on('disconnect', () => {
      socket.off("tweets")
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }
 

  handleCountryChange = async (country) => {

      if(country === 'global'){
        country = null;
      }
      const fetchedData = await getMethod(country);

      this.setState({ data: fetchedData, country: country});
  }

  handleChangeParentState = (option) => {
    this.setState({
      status: option
    })
  }

  


  render(){
    const { data, country, status } = this.state;
    let conditionalComponent;
    if( status === "Chart" ){
      conditionalComponent = ( 
      <Charts data={data} country = {country} /> )
    }

    else if ( status === "News" ){
      conditionalComponent = <News />
    }

    else {
    conditionalComponent = <h1>{this.state.tweets.map(tweet => tweet.text)}</h1>
    }

    console.log(this.state.tweets)
    
    return (
      <div className= {Styles.container}>
        <img className={Styles.image} src={coronaImage} alt="covid-19"/>
        <Cards data = { data }/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Menu status = { status } handleChange = {this.handleChangeParentState} />       
        {conditionalComponent}
        
        
        
      </div>
    );
  }
  
}

export default App;
