import React from 'react';

class Slider extends React.Component {
    state = {
        imageIndex: 0,
        images: [
            '/images/1.jpg',
            '/images/2.jpg',
            '/images/3.jpg',
            '/images/4.jpg',
            '/images/5.jpg',
        ]
    };
    onClickPrev = () => {
        console.log(this.state.imageIndex);
        if (this.state.imageIndex > 0) {
            this.setState({imageIndex: --this.state.imageIndex});
            return;
        }
        this.setState({imageIndex: 4});
    };
    onClickNext = () => {
        console.log(this.state.imageIndex);
        if (this.state.imageIndex < 4) {
            this.setState({imageIndex: ++this.state.imageIndex});
            return;
        }
        this.setState({imageIndex: 0});
    };

    render() {
        return (
            <div align="center">
                <button onClick={this.onClickPrev}>Prev</button>
                <img style={{width: 500, height: 300, margin: 10}} src={this.state.images[this.state.imageIndex]}/>
                <button onClick={this.onClickNext}>Next</button>
            </div>
        );
    };
}

export default Slider;