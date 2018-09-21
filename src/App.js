import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
//import logo from './logo.svg';
//import News from './News';
//import Form from './Form';
//import newsData from './data';
//import Slider from "./Slider";
//import	registerServiceWorker	from	'./registerServiceWorker';

class App extends Component {
    render() {
        const {user, page} =this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1></header>
                <p> Привет {user.name}! </p>
                <p>У тебя  {page.photos.length} фото за {page.year} год  ?</p>
            </div>
        );
    }
}

const mapStateToProps = store => {
        console.log(store);
        return {
            user: store.user,
            page: store.page,
        }
    }
;

export default connect(mapStateToProps)(App)

/*class App extends Component {
    state = {
        news: newsData
    };
    handleAddNews = (data) => {
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews});
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Slider/>
                <Form onAddNews={this.handleAddNews}/>
                <News data={this.state.news}/>
            </div>
        );
    }
}*/


