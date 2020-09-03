import React, {Component } from 'react';


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };

    this.handleSort=this.handleSort.bind(this);
  }
  handleSort(orderBy, orderDir) {
    console.log("handleSort: ", orderBy +"-" +orderDir);
    this.props.onClickSort(orderBy, orderDir);

  }


    render() {
      let {orderBy,orderDir}    = this.props;
     /* let orderDir    = this.props.orderDir;*/
      
      let strSort= orderBy + "-" +orderDir; 
      return (
             <div className="col-sm-3">
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by 
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
               <li> <a onClick={()=>this.handleSort('name','asc')} role="button" >Name ASC</a></li>
               <li> <a onClick={()=>this.handleSort('name','desc')} role="button" >Name DESC</a></li>
               <li> <a onClick={()=> this.handleSort('level','asc')} role="button" >Level ASC</a></li>
               <li> <a onClick={()=> this.handleSort('level','desc')} role="button">Level DESC</a></li>
               </div> 
               <button type="button" className="btn btn-success">{strSort}</button>
            </div>
          </div>
              );
  }
  
}

export default Sort;