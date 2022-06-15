import './app.css';
import React from "react";
import styled from 'styled-components';
import './Components/app-header/app-header.css';
import './Components/post-add-form/post-add-form.css';
import './Components/post-list/post-list.css'
import './Components/post-list-item/post-list-item.css'
import './Components/post-status-filter/post-status-filter.css'
import './Components/search-panel/search-panel.css'
import AppHeader from "./Components/app-header/AppHeader";
import SearchPanel from "./Components/search-panel/SearchPanel";
import PostStatusFilter from "./Components/post-status-filter/PostStatusFilter";
import PostList from "./Components/post-list/PostList";
import PostAddForm from "./Components/post-add-form/PostAddForm";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
// const StyledAppBlock = styled(AppBlock)`
// background-color: gray;
// `

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important:true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label:'I need a break...', important: false, id: 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }


    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0,index);
            const after = data.slice(index + 1);
            const newArr = [...before,...after];
           return{
              data: newArr
           }
        })
    }
    addItem(body){
        const newItem = {
         label: body,
         important: false,
         id: this.maxId++
     }
     this.setState(({data}) => {
         const newArr = [...data, newItem];
         return{
             data: newArr
         }
     })
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    posts={this.state.data}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </AppBlock>
        );
    }





}

