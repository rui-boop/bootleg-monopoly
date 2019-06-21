﻿import React, { Component } from 'react';

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
        var newPosition = this.state.players[this.state.turn].position + rand + rand2;

        if (newPosition > 10) {
            newPosition = newPosition % 10;
        }
        this.state.players[this.state.turn].position = newPosition;
        
    }

    endTurn() {
        var numberOfCells;
        if (this.state.position > numberOfCells) {
            this.state.players.money = this.state.players.money + 200;
            this.state.position = this.state.position - numberOfCells;
        }
        if (this.state.turn >= this.state.players.length - 1) {
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
                <div> Position Player 1: {this.state.players[0].position} / Position Player 2: {this.state.players[1].position} </div>
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
                        <div class="Cell RedProperty EveryFont">
                        <p>
                            {(this.state.players[0].position == 1) ? "(P1)" : ""}
                            {(this.state.players[1].position == 1) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>
                            {(this.state.players[0].position == 2) ? "(P1)" : ""}
                        {(this.state.players[1].position == 2) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell RedProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 3) ? "(P1)" : ""}
                            {(this.state.players[1].position == 3) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell RedProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 4) ? "(P1)" : ""}
                            {(this.state.players[1].position == 4) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell Train EveryFont">
                                <p>
                                {(this.state.players[0].position == 5) ? "(P1)" : ""}
                            {(this.state.players[1].position == 5) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 6) ? "(P1)" : ""}
                            {(this.state.players[1].position == 6) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
                            <p>
                            {(this.state.players[0].position == 7) ? "(P1)" : ""}
                        {(this.state.players[1].position == 7) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell WaterElectric EveryFont">
                            <p>
                            {(this.state.players[0].position == 8) ? "(P1)" : ""}
                        {(this.state.players[1].position == 8) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
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
                            <p>FREE PARKING</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Red Space</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Train</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Water</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Yellow Space</p>
                        </div>
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>GO TO JAIL</p>
                        </div>
                    </div>

                </div>
                <div class="Table TableLeftSide">
                    <div class="Heading">
                        <div class="Cell OrangeProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell OrangeProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell OrangeProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell WaterElectric EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p></p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell EveryFont">
                            <p>Orange Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Orange Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Orange Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Train</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Pink Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Pink Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Electric</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Pink Square</p>
                        </div>
                    </div>
                </div>
                <div class="Table TableRightSide">
                    <div class="Heading">
                        <div class="Cell BlueProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell BlueProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p></p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell EveryFont">
                            <p>Blue Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Luxury Tax</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Blue Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Train</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Green Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Green Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Green Square</p>
                        </div>
                    </div>
                </div>
                <div class="Table TableBottom">
                    <div class="Heading">
                        <div class="Cell Square HeaderSquare">
                            <p></p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell BrownProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell BrownProperty EveryFont">
                            <p></p>
                        </div>
                        <div class="Cell Square HeaderSquare">
                            <p></p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>JAIL, JUST VISITING</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>LightBlue Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>LightBlue Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>LightBlue Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Train</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Income Tax</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Brown Square</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Brown Square</p>
                        </div>
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>GO</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}