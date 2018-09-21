import React, {Component} from 'react';
import Article from './Article';

class News extends Component {
    state = {
        isShowBigText: false,
    };


    render() {
        const news = this.props.data.map(function (item,index) {
            return (
                <div key={index}>
                    <Article data={item}/>
                </div>
            );
        });
        return (
            <React.Fragment>
                {news}
            </React.Fragment>
        );
    }
}

export default News;