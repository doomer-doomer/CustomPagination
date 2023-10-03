import React, { Component } from 'react';
import CarsData from './CarsData';
import Pagination from './Pagination'
import 'boxicons'
import Lottie from "lottie-react";
import NoCarFound from './nocarfound.json'

class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      filteredData:CarsData,
      isActive:""
    };
    this.prevState = null;
  }

 componentDidUpdate(){
  this.prevState = { ...this.state };
  this.compareStates()
 }

 compareStates() {

  if (this.prevState.searchText !== this.state.searchText) {
    this.setState({isActive:""})
  }
}

  handleSearchChange = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText });

    const filteredData = this.props.data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ filteredData });
  };

  handleSearchClick = (event) => {
    const searchText = event;
    this.setState({ searchText });

    const filteredData = this.props.data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ filteredData });
  };

  handleActivation= (event)=>{
    const btn = event;
    this.setState()
  }
  render() {
    
    return (
      <div className='wholeLayout'>
        <div className='upperLayout'>
                    <box-icon name='search'></box-icon>
                    <input 
                    type="text"
                    placeholder="Start typing..."
                    value={this.state.searchText}
                    onChange={this.handleSearchChange}
                    />
                    
                    <button onClick={abc=>{this.handleSearchClick("Aston Martin"); this.setState({searchText:"Aston Martin"})}} style={{backgroundColor: this.state.searchText==='Aston Martin' ? "#2240c2" :"", color: this.state.searchText ==="Aston Martin" ? "#ffffff" : "#000000"}}>Aston Martin</button>
                    <button onClick={abc=>{this.handleSearchClick("Audi"); this.setState({searchText:"Audi"})}} style={{backgroundColor: this.state.searchText==='Audi' ? "#2240c2" :"", color: this.state.searchText ==="Audi" ? "#ffffff" : "#000000"}}>Audi</button>
                    <button onClick={abc=>{this.handleSearchClick("Cadillac"); this.setState({searchText:"Cadillac"})}} style={{backgroundColor: this.state.searchText==='Cadillac' ? "#2240c2" :"", color: this.state.searchText ==="Cadillac" ? "#ffffff" : "#000000"}}>Cadillac</button>
                    <button onClick={abc=>{this.handleSearchClick("Chevrolet"); this.setState({searchText:"Chevrolet"})}} style={{backgroundColor: this.state.searchText==='Chevrolet' ? "#2240c2" :"", color: this.state.searchText ==="Chevrolet" ? "#ffffff" : "#000000"}}>Chevrolet</button>
                    <button onClick={abc=>{this.handleSearchClick("Dodge"); this.setState({searchText:"Dodge"})}} style={{backgroundColor: this.state.searchText==='Dodge' ? "#2240c2" :"", color: this.state.searchText ==="Dodge" ? "#ffffff" : "#000000"}}>Dodge</button>
                    <button onClick={abc=>{this.handleSearchClick("Fiat"); this.setState({searchText:"Fiat"})}} style={{backgroundColor: this.state.searchText==='Fiat' ? "#2240c2" :"", color: this.state.searchText ==="Fiat" ? "#ffffff" : "#000000"}}>Fiat</button>
                    <button onClick={abc=>{this.handleSearchClick("Ford"); this.setState({searchText:"Ford"})}} style={{backgroundColor: this.state.searchText==='Ford' ? "#2240c2" :"", color: this.state.searchText ==="Ford" ? "#ffffff" : "#000000"}}>Ford</button>
                    <button onClick={abc=>{this.handleSearchClick("Mazda"); this.setState({searchText:"Mazda"})}} style={{backgroundColor: this.state.searchText==='Mazda' ? "#2240c2" :"", color: this.state.searchText ==="Mazda" ? "#ffffff" : "#000000"}} >Mazda</button>
                    <button onClick={abc=>{this.handleSearchClick("Nissan"); this.setState({searchText:"Nissan"})}} style={{backgroundColor: this.state.searchText==='Nissan' ? "#2240c2" :"", color: this.state.searchText ==="Nissan" ? "#ffffff" : "#000000"}}>Nissan</button>
                    <button onClick={abc=>{this.handleSearchClick("Jaguar"); this.setState({searchText:"Jaguar"})}} style={{backgroundColor: this.state.searchText==='Jaguar' ? "#2240c2" :"", color: this.state.searchText ==="Jaguar" ? "#ffffff" : "#000000"}}>Jaguar</button>
                    <button onClick={abc=>{this.handleSearchClick("Mercedes"); this.setState({searchText:"Mercedes"})}} style={{backgroundColor: this.state.searchText==='Mercedes' ? "#2240c2" :"", color: this.state.searchText ==="Mercedes" ? "#ffffff" : "#000000"}}>Mercedes</button>
                    <button onClick={abc=>{this.handleSearchClick("Mitsubishi"); this.setState({searchText:"Mitsubishi"})}} style={{backgroundColor: this.state.searchText==='Mitsubishi' ? "#2240c2" :"", color: this.state.searchText ==="Mitsubishi" ? "#ffffff" : "#000000"}}>Mitsubishi</button>
                    <button onClick={abc=>{this.handleSearchClick("Porsche"); this.setState({searchText:"Porsche"})}} style={{backgroundColor: this.state.searchText==='Porsche' ? "#2240c2" :"", color: this.state.searchText ==="Porsche" ? "#ffffff" : "#000000"}}>Porsche</button>
                    <button onClick={abc=>{this.handleSearchClick("Toyota"); this.setState({searchText:"Toyota"})}} style={{backgroundColor: this.state.searchText==='Toyota' ? "#2240c2" :"", color: this.state.searchText ==="Toyota" ? "#ffffff" : "#000000"}}>Toyota</button>
                    <button onClick={abc=>{this.handleSearchClick("Volvo"); this.setState({searchText:"Volvo"})}} style={{backgroundColor: this.state.searchText==='Volvo' ? "#2240c2" :"", color: this.state.searchText ==="Volvo" ? "#ffffff" : "#000000"}}>Volvo</button>

               
        </div>
       <div className='lowerLayout'>
         {this.state.filteredData.length !==0 ?  <Pagination 
          data={this.state.filteredData}
          />:
          <div className='nodata'>
                <Lottie style={{height:"400px"}} animationData={NoCarFound} loop={true} />
                <h1>No cars available for : {this.state.searchText}</h1>
            </div>}
       </div>
      
    
      </div>
    );
  }
}

export default SearchComponent;
