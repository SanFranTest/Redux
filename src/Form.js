import React from 'react';
import PropTypes from 'prop-types'

class Form extends React.Component {

    state = {
        input: '',
        text: '',
        bigText: '',
        agree: false,
    };

    static propTypes = {
        onAddNews: PropTypes.func.isRequired
    };


    onChangeInputValue = (e) => {
        this.setState({input: e.currentTarget.value})
    };
    onChangeTextAreaValue = (e) => {
        this.setState({text: e.currentTarget.value})
    };
    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    };
    onBtnClickHandler = (e) => {
        e.preventDefault();
        const {input, text, bigText} = this.state;
        this.props.onAddNews({
            id: +new Date(),
            author: input,
            text,
            bigText:input,
        });
    };

    validate = () => {
        return this.state.text.trim() && this.state.input.trim() && this.state.agree
    };

    render() {
        return (
            <form className='add'>
                <div>
                    <input
                        type='text'
                        className='add_author'
                        placeholder='Ваше имя'
                        onChange={this.onChangeInputValue}
                        value={this.state.input}
                    />
                    <textarea
                        className='add_text'
                        placeholder='Текст новости'
                        onChange={this.onChangeTextAreaValue}
                        value={this.state.text}
                    ></textarea>
                </div>
                <label className='add_checkrule'>
                    <input
                        type='checkbox'
                        onChange={this.handleCheckboxChange}
                    /> Я согласен с правилами
                </label>
                <button
                    className='add_btn'
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    показать alert
                </button>
            </form>
        );
    }
    ;
}

export default Form;