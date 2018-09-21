import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Article extends Component {
    state = {
        isShowBigText: false,
    };

    static propTypes = {
        data: PropTypes.shape({
            id: PropTypes.number,
            author: PropTypes.string,
            text: PropTypes.string,
            bigText: PropTypes.string,
        })
    };

    showBigText = (e) => {
        e.preventDefault();
        this.setState({isShowBigText: !this.state.isShowBigText})
    };

    render() {
        const {data} = this.props;
        return (
            <div>
                <h1>{data.author}</h1>
                <p>{data.text}</p>
                {
                    !this.state.isShowBigText && <a style={{cursor: 'pointer'}} onClick={this.showBigText}>Показать</a>
                }
                {
                    this.state.isShowBigText && <p>{data.bigText}</p>
                }
                {
                    this.state.isShowBigText && <a style={{cursor: 'pointer'}} onClick={this.showBigText}>Скрыть</a>
                }
            </div>
        );
    }
}

export default Article;
