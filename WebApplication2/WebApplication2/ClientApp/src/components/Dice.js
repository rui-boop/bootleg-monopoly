import React, { Component } from 'react';

export class Dice extends React.Component {

    constructor(props) {
        super(props);
        this.randomNumber = this.randomNumber.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.state = {
            dice1: 0,
            dice2: 0,
            result: 0,
            isDouble: 0,
            players: [
                {
                    money: 0,
                    position: 5,
                    properties: [
                        {
                            name: 'New York Avenue',
                            price: 400,
                            rent: 20,
                            mortgage: 200,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            isMatch: false

                        }
                    ],
                    name: 'John',
                    figure: 'puppy',
                },
                {
                    money: 0,
                    position: 7,
                    properties: [
                        {
                            name: 'New York Avenue',
                            price: 400,
                            rent: 20,
                            mortgage: 200,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            isMatch: false

                        }
                    ],
                    name: 'Jane',
                    figure: 'puppy',
                }
            ],
            turn: 0,
            bank: [
                {
                    properties: [
                        {
                            name: 'New York Avenue',
                            price: 400,
                            rent: 20,
                            mortgage: 200,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                        }
                    ]
                }
            ]


        };

    }
    randomNumber() {
        const rand = Math.floor(Math.random() * 6) + 1;
        const rand2 = Math.floor(Math.random() * 6) + 1;
        this.setState({ dice1: rand });
        this.setState({ dice2: rand2 });
        this.setState({ result: rand + rand2 });
        this.setState({ isDouble: rand == rand2 ? 'Doubles!' : 'Next' });
    }

    endTurn() {
        var numberOfCells
        if (this.state.position > numberOfCells) {
            this.state.players.money = this.state.players.money + 200;
            this.state.position = this.state.position - numberOfCells;
        }
        if (this.state.turn > this.state.players - 1) {
            this.setState({ turn: 0 })
        } else {
            this.setState({ turn: this.state.turn + 1 })
        }
    }

    render() {
        return (
            <div>
                <div className='numberdisplay'>{this.state.result}</div>
                <button onClick={this.randomNumber.bind(this)}>Roll The Dice!</button>
                <div> {this.state.isDouble} </div>
                <button onClick={this.endTurn.bind(this)}>End Turn</button>
                <div> Money: ${this.state.players.money} </div>
                <div> Position: {this.state.players.position} </div>
                <div> turn: {this.state.turn} </div>
                <div>
                    <i class="fas fa-dog"></i>
                </div>
                <div class="Table">
                    <div class="Title">
                        <p>Bootleg Monopoly</p>
                    </div>
                    <div class="Heading">
                        <div class="Cell Square HeaderSquare">
                            <p>
                                {(this.state.players[0].position == 0) ? "(P1)" : ""}
                                {(this.state.players[1].position == 0) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell RedProperty">
                        <p>
                            {(this.state.players[0].position == 1) ? "(P1)" : ""}
                            {(this.state.players[1].position == 1) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell">
                            <p>
                            {(this.state.players[0].position == 2) ? "(P1)" : ""}
                        {(this.state.players[1].position == 2) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell RedProperty">
                                <p>
                                {(this.state.players[0].position == 3) ? "(P1)" : ""}
                            {(this.state.players[1].position == 3) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell RedProperty">
                                <p>
                                {(this.state.players[0].position == 4) ? "(P1)" : ""}
                            {(this.state.players[1].position == 4) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell Train">
                                <p>
                                {(this.state.players[0].position == 5) ? "(P1)" : ""}
                            {(this.state.players[1].position == 5) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty">
                                <p>
                                {(this.state.players[0].position == 6) ? "(P1)" : ""}
                            {(this.state.players[1].position == 6) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty">
                            <p>
                            {(this.state.players[0].position == 7) ? "(P1)" : ""}
                        {(this.state.players[1].position == 7) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell WaterElectric">
                            <p>
                            {(this.state.players[0].position == 8) ? "(P1)" : ""}
                        {(this.state.players[1].position == 8) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell YellowProperty">
                                <p>
                                {(this.state.players[0].position == 9) ? "(P1)" : ""}
                            {(this.state.players[1].position == 9) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell Square HeaderSquare">
                                <p>
                                {(this.state.players[0].position == 10) ? "(P1)" : ""}
                            {(this.state.players[1].position == 10) ? "(P2)" : ""}
                            </p>

                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>Free Parking</p>
                        </div>
                        <div class="Cell">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell">
                            <p>Chance</p>
                        </div>
                        <div class="Cell">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell">
                            <p>Train</p>
                        </div>
                        <div class="Cell">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell">
                            <p>Water</p>
                        </div>
                        <div class="Cell">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>Jail</p>
                        </div>
                    </div>

                </div>
                <div class="Table TableLeftSide">
                    <div class="Heading">
                        <div class="Cell">
                            <p></p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell">
                            <p>Orange Square</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}