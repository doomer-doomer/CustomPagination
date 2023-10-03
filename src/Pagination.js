import React, { Component } from 'react';
import Cars from './Car';
import './carsLayout.css'
import 'boxicons'

class PaginationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      itemsPerPage: 6,
      isNavigating: false
    };
  }

  componentDidMount() {
    const currentPath = window.location.pathname;
    const currentPage = parseInt(currentPath.replace('/page/', '')) || 1;
    this.setState({ currentPage });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ currentPage: 1 });
    }
    window.history.replaceState(null, "Change page", `/page/${this.state.currentPage}`)
  }

  calculatePageRange() {
    const { currentPage, itemsPerPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  renderItems() {
    const { data } = this.props;
    const { startIndex, endIndex } = this.calculatePageRange();
    const itemsToDisplay = data.slice(startIndex, endIndex);

   
    return (
      <div className='allCars'>
         {itemsToDisplay.map((eachCar)=>{
          if(eachCar.image !==""){
            return <Cars
            key={eachCar.key}
            name = {eachCar.title}
            image={eachCar.image}
            class = {eachCar.class}
            year = {eachCar.start_production}
        />
          }else{
            return <Cars
            key={eachCar.key}
            name = {eachCar.title}
            image="https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1641422717.png?resize=980:*"
            class = {eachCar.class}
            year = {eachCar.start_production}
        />
          }
        
    })}
      </div>
     
    );
  }

  renderPaginationButtons() {
    const { data } = this.props; // Replace with your JSON data
    const { currentPage, itemsPerPage } = this.state;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
      <div className='paginationBtnSec'>
        <div className='paginationBtn'>
       
        {currentPage<=1 ? <box-icon name='chevrons-left' color='rgba(0,0,0,0.5)' ></box-icon> : <box-icon onClick={() => this.goToStartPage()} name='chevrons-left'></box-icon>}
        {currentPage<=1 ? <box-icon name='chevron-left' color='rgba(0,0,0,0.5)' ></box-icon> :<box-icon onClick={() => this.goToPrevPage()} disabled={currentPage === 1} name='chevron-left'></box-icon>}
         
          <span>{`${currentPage} / ${totalPages}`}</span>

          {currentPage>=totalPages ? <box-icon name='chevron-right' color='rgba(0,0,0,0.5)' ></box-icon> : <box-icon onClick={() => this.goToNextPage()} name='chevron-right'></box-icon>}
          {currentPage>=totalPages ? <box-icon name='chevrons-right' color='rgba(0,0,0,0.5)' ></box-icon> : <box-icon onClick={() => this.goToLastPage()} name='chevrons-right'></box-icon>}
          
        </div>
       
      </div>
    );
  }

  goToPrevPage() {
    this.setState((prevState) => ({
      currentPage: this.state.currentPage-1,
    }));
  }

  goToNextPage() {
    this.setState((prevState) => ({
      currentPage: this.state.currentPage+1,
    }));
  }

  goToStartPage(){
    this.setState((prevState)=>({
      currentPage:1
    }))
  }

  goToLastPage(){
    const totalPages = Math.ceil(this.props.data.length / this.state.itemsPerPage);
    this.setState((prevState)=>({
      currentPage:totalPages
    }))
  }

  render() {
    return (
      <div className='paginationComp'>
        <div>
            {this.renderItems()}
        </div>
       <div className='paginationBtnSec'>
           {this.renderPaginationButtons()}
       </div>
       
      </div>
    );
  }
}

export default PaginationComponent;
