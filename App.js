import React, {Component } from 'react';
import logo from './logo.svg';
import Title from './Components/Title';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
import {filter, includes,orderBy as funcOrderBy ,remove, reject } from 'lodash';
import task from './mork/task';
import './App.css';

const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      items:task.items,

      isShowForm: false,
      strSearch:'' ,
      orderBy:'name',
      orderDir:'asc',
      itemSelected:null,

    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(orderDir,orderBy) {
    this.setState({
      orderBy:orderBy,
      orderDir:orderDir
    });

  }

  handleSubmit(item){
   
    let items =this.state.items;
    let id    =null;

    if(item.id !== '') {//edit
      items = reject(items, { id: item.id });
      id= item.id;

    } else {//add
      id= uuidv4();
      
    }

    items.push({
        id    :id,
        name  :item.name,
        level :+ item.level // 0 :small, 1: medium, 2 :high
      })


    this.setState({
      items:items,
      isShowForm:false

    });



  }
  handleEdit(item){
    this.setState({
      itemSelected: item,
      isShowForm:true

    })

  }

  handleDelete(id){
    
    let items= this.state.items;
    remove(this.state.items, (item)=> {
      return item.id ===id;
    });
    this.setState({
      items: this.state.items
    });

  }
  handleToggleForm(){
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    });
  }
  handleSearch( value){
    this.setState({
      strSearch: value
    });
  }  
  closeForm(){
    this.setState({
      isShowForm: false
    });
  }


    render() {
      let itemsOrigin =this.state.items;
      let items      =[];
      let isShowForm =this.state.isShowForm;
      let orderBy    = this.state.orderBy;
      let orderDir    = this.state.orderDir;
      let elmForm    = null;
      let itemSelected =this.state.itemSelected;
      const search   =this.state.strSearch;
      console.log (orderBy+"-"+orderDir);



      /*items= filter(itemsOrigin, (item) =>{
        return includes(item.name, search); 
       });*/
      if(search.length > 0) {
        itemsOrigin.forEach((item) => {
        if(item.name.toLowerCase().indexOf(search) !== -1){
          items.push(item);
        }
      });

      }else{
        items =itemsOrigin;
      }


      items = funcOrderBy(items, [orderBy],[orderDir]);
      


      if(isShowForm) {
        elmForm =  < Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}  />;
      }
      return (
        <div className="container">
      
        <Title />

        <Control 
                orderDir ={orderDir}
                orderBy={orderBy}
                onClickAdd ={this.handleToggleForm}
                 onClickSort ={this.handleSort}
                isShowForm={isShowForm} 
                onClickSearchGo={this.handleSearch}
                 
        />

       {elmForm}

        < List 
        onClickEdit={this.handleEdit}
        items={items}
        onClickDelete={this.handleDelete}
         />

       </div>
      
    );
  }
  
}

export default App;
