import React, { Component } from 'react';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            buffer: 0,
            operator: '+'
        };
        this.Sum = this.Sum.bind(this);
        this.Minus = this.Minus.bind(this);
        this.Multiplication = this.Multiplication.bind(this);
        this.Division = this.Division.bind(this);
        this.DisplayResult = this.DisplayResult.bind(this);
    }

    DisplayResult() {
        this.Result(true);
    }

    Result(displayResult) {
        var result = 0;

        if (this.state.operator == '+') {
            result = this.state.value + this.state.buffer;
        } else if (this.state.operator == '-') {
            result = this.state.buffer - this.state.value;
        } else if (this.state.operator == '*') {
            result = this.state.value * this.state.buffer;
        } else if (this.state.operator == '/') {
            result = this.state.buffer / this.state.value;
        } else { result = 0 }
        if (displayResult) {
            this.setState({
                value: result,
                buffer: 0,
                operator: '+'
            });
        } else {
            this.setState({
                value: 0,
                buffer: result,
                operator: '+'
            });
        }
    }

    Sum() {
        this.Result();
        this.setState({
            operator: '+'
        })
    }

    Minus() {
        this.Result();
        this.setState({
            operator: '-'
        })
    }

    Multiplication() {
        this.Result();
        this.setState({
            operator: '*'
        })
    }

    Division() {
        this.Result();
        this.setState({
            operator: '/'
        })
    }

    render() {
        return (

            <div className='numberpad'>
                <div className='display'>{this.state.value}</div>
                <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 7 })}>7</button>
                <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 8 })}>8</button>
                <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 9 })}>9</button>
                <button className='font' onClick={this.Sum}>+</button>
                <div className='numberpad'>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 4 })}>4</button>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 5 })}>5</button>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 6 })}>6</button>
                    <button className='font' onClick={this.Minus}>-</button>
                </div>
                <div className='numberpad'>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 1 })}>1</button>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 2 })}>2</button>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 3 })}>3</button>
                    <button className='font' onClick={this.Multiplication}>*</button>
                </div>
                <div className='numberpad'>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 0 })}>.</button>
                    <button className='font' onClick={() => this.setState({ value: this.state.value * 10 + 0 })}>0</button>
                    <button className='font' onClick={this.DisplayResult}>=</button>
                    <button className='font' onClick={this.Division}>/</button>
                </div>
                <div className='numberpad'>
                    <button className='font' onClick={() => this.setState({value: 0, buffer: 0})}>C</button>
                </div>
            </div>
        );
    }
}