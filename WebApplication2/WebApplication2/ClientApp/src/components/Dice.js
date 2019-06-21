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
                    money: 2000,
                    position: 0,
                    properties: [
                        {
                            name: 'New York Avenue',
                            price: 400,
                            rent: 20,
                            mortgage: 200,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                            isMatch: false

                        }
                    ],
                    name: 'John',
                    figure: 'puppy',
                },
                {
                    money: 2000,
                    position: 0,
                    properties: [
                        {
                            name: 'New York Avenue',
                            price: 400,
                            rent: 20,
                            mortgage: 200,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 2,
                            isMatch: false

                        }
                    ],
                    name: 'Jane',
                    figure: 'puppy',
                }
            ],
            turn: 0,
            bank: {
                    property: [
                        {
                            name: 'Mediterranean Avenue',
                            price: 60,
                            rent: 2,
                            mortgage: 30,
                            color: 'brown',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Baltic Avenue',
                            price: 60,
                            rent: 4,
                            mortgage: 30,
                            color: 'brown',
                            houses: 0,
                            hotels: 0,
                            position: 2,
                        },
                        {
                            name: 'Reading Railroad',
                            price: 200,
                            rent: 25,
                            mortgage: 100,
                            color: 'black',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Oriental Avenue',
                            price: 100,
                            rent: 6,
                            mortgage: 50,
                            color: 'light-blue',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Vermont Avenue',
                            price: 100,
                            rent: 6,
                            mortgage: 50,
                            color: 'light-blue',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Connecticut Avenue',
                            price: 120,
                            rent: 8,
                            mortgage: 60,
                            color: 'light-blue',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'St. Charles Place',
                            price: 140,
                            rent: 10,
                            mortgage: 70,
                            color: 'pink',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Electric Company',
                            price: 150,
                            rent: 50,
                            mortgage: 75,
                            color: 'white',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'States Avenue',
                            price: 140,
                            rent: 10,
                            mortgage: 70,
                            color: 'pink',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Virginia Avenue',
                            price: 160,
                            rent: 12,
                            mortgage: 80,
                            color: 'pink',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Pennsylvania Railroad',
                            price: 200,
                            rent: 25,
                            mortgage: 100,
                            color: 'black',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'St. James Place',
                            price: 180,
                            rent: 14,
                            mortgage: 90,
                            color: 'orange',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Tennessee Avenue',
                            price: 180,
                            rent: 14,
                            mortgage: 90,
                            color: 'orange',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'New York Avenue',
                            price: 200,
                            rent: 16,
                            mortgage: 100,
                            color: 'orange',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Kentucky Avenue',
                            price: 220,
                            rent: 18,
                            mortgage: 110,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Indiana Avenue',
                            price: 220,
                            rent: 18,
                            mortgage: 110,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Illinois Avenue',
                            price: 240,
                            rent: 20,
                            mortgage: 120,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'B&O Railroad',
                            price: 200,
                            rent: 25,
                            mortgage: 100,
                            color: 'red',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Atlantic Avenue',
                            price: 260,
                            rent: 22,
                            mortgage: 130,
                            color: 'yellow',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Ventnor Avenue',
                            price: 260,
                            rent: 22,
                            mortgage: 130,
                            color: 'yellow',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Water Works',
                            price: 150,
                            rent: 50,
                            mortgage: 75,
                            color: 'white',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Marvin Gardens',
                            price: 280,
                            rent: 24,
                            mortgage: 140,
                            color: 'yellow',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Pacific Avenue',
                            price: 300,
                            rent: 26,
                            mortgage: 150,
                            color: 'green',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'North Carolina Avenue',
                            price: 300,
                            rent: 26,
                            mortgage: 150,
                            color: 'green',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Pennsylvania Avenue',
                            price: 320,
                            rent: 28,
                            mortgage: 160,
                            color: 'green',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Short Line',
                            price: 200,
                            rent: 25,
                            mortgage: 100,
                            color: 'black',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Park Place',
                            price: 350,
                            rent: 35,
                            mortgage: 175,
                            color: 'blue',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                        {
                            name: 'Boardwalk',
                            price: 400,
                            rent: 50,
                            mortgage: 200,
                            color: 'blue',
                            houses: 0,
                            hotels: 0,
                            position: 1,
                        },
                    ]
                }
              
            


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

        if (newPosition >= 40) {
            newPosition = newPosition % 40;
        }
        this.state.players[this.state.turn].position = newPosition;
        
    }

    endTurn() {
        if (this.state.position >= 40) {
            this.state.players[this.state.turn].money = this.state.players[this.state.turn].money + 200;
            this.state.position = this.state.position % 40;
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
                <div> Player 1 Money: ${this.state.players[0].money} / Player 2 Money: ${this.state.players[1].money} </div>
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
                                {(this.state.players[0].position == 20) ? "(P1)" : ""}
                                {(this.state.players[1].position == 20) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell RedProperty EveryFont">
                        <p>
                            {(this.state.players[0].position == 21) ? "(P1)" : ""}
                            {(this.state.players[1].position == 21) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>
                            {(this.state.players[0].position == 22) ? "(P1)" : ""}
                        {(this.state.players[1].position == 22) ? "(P2)" : ""}
                        </p>
                        </div>
                        <div class="Cell RedProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 23) ? "(P1)" : ""}
                            {(this.state.players[1].position == 23) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell RedProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 24) ? "(P1)" : ""}
                            {(this.state.players[1].position == 24) ? "(P2)" : ""}
                            </p>
                        </div>
                        <div class="Cell Train EveryFont">
                                <p>
                                {(this.state.players[0].position == 25) ? "(P1)" : ""}
                            {(this.state.players[1].position == 25) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 26) ? "(P1)" : ""}
                            {(this.state.players[1].position == 26) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
                            <p>
                            {(this.state.players[0].position == 27) ? "(P1)" : ""}
                        {(this.state.players[1].position == 27) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell WaterElectric EveryFont">
                            <p>
                            {(this.state.players[0].position == 28) ? "(P1)" : ""}
                        {(this.state.players[1].position == 28) ? "(P2)" : ""}
                        </p>

                        </div>
                        <div class="Cell YellowProperty EveryFont">
                                <p>
                                {(this.state.players[0].position == 29) ? "(P1)" : ""}
                            {(this.state.players[1].position == 29) ? "(P2)" : ""}
                            </p>

                        </div>
                        <div class="Cell Square HeaderSquare">
                                <p>
                                {(this.state.players[0].position == 30) ? "(P1)" : ""}
                            {(this.state.players[1].position == 30) ? "(P2)" : ""}
                            </p>

                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>FREE PARKING</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[14].name}</p>
                            <p>Price: ${this.state.bank.property[14].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[15].name}</p>
                            <p>Price: ${this.state.bank.property[15].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[16].name}</p>
                            <p>Price: ${this.state.bank.property[16].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[17].name}</p>
                            <p>Price: ${this.state.bank.property[17].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[18].name}</p>
                            <p>Price: ${this.state.bank.property[18].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[19].name}</p>
                            <p>Price: ${this.state.bank.property[19].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[20].name}</p>
                            <p>Price: ${this.state.bank.property[20].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[21].name}</p>
                            <p>Price: ${this.state.bank.property[21].price}</p>
                        </div>
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>GO TO JAIL</p>
                        </div>
                    </div>

                </div>
                <div class="Table TableLeftSide">
                    <div class="Heading">
                        <div class="Cell OrangeProperty EveryFont">
                            <p>{(this.state.players[0].position == 19) ? "(P1)" : ""}
                                {(this.state.players[1].position == 19) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell OrangeProperty EveryFont">
                            <p>{(this.state.players[0].position == 18) ? "(P1)" : ""}
                                {(this.state.players[1].position == 18) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 17) ? "(P1)" : ""}
                                {(this.state.players[1].position == 17) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell OrangeProperty EveryFont">
                            <p>{(this.state.players[0].position == 16) ? "(P1)" : ""}
                                {(this.state.players[1].position == 16) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p>{(this.state.players[0].position == 15) ? "(P1)" : ""}
                                {(this.state.players[1].position == 15) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p>{(this.state.players[0].position == 14) ? "(P1)" : ""}
                                {(this.state.players[1].position == 14) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p>{(this.state.players[0].position == 13) ? "(P1)" : ""}
                                {(this.state.players[1].position == 13) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell WaterElectric EveryFont">
                            <p>{(this.state.players[0].position == 12) ? "(P1)" : ""}
                                {(this.state.players[1].position == 12) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell PinkProperty EveryFont">
                            <p>{(this.state.players[0].position == 11) ? "(P1)" : ""}
                                {(this.state.players[1].position == 11) ? "(P2)" : ""}</p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[13].name}</p>
                            <p>Price: ${this.state.bank.property[13].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[12].name}</p>
                            <p>Price: ${this.state.bank.property[12].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[11].name}</p>
                            <p>Price: ${this.state.bank.property[11].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[10].name}</p>
                            <p>Price: ${this.state.bank.property[10].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[9].name}</p>
                            <p>Price: ${this.state.bank.property[9].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[8].name}</p>
                            <p>Price: ${this.state.bank.property[8].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[7].name}</p>
                            <p>Price: ${this.state.bank.property[7].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[6].name}</p>
                            <p>Price: ${this.state.bank.property[6].price}</p>
                        </div>
                    </div>
                </div>
                <div class="Table TableRightSide">
                    <div class="Heading">
                        <div class="Cell BlueProperty EveryFont">
                            <p>{(this.state.players[0].position == 39) ? "(P1)" : ""}
                                {(this.state.players[1].position == 39) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 38) ? "(P1)" : ""}
                                {(this.state.players[1].position == 38) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell BlueProperty EveryFont">
                            <p>{(this.state.players[0].position == 37) ? "(P1)" : ""}
                                {(this.state.players[1].position == 37) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 36) ? "(P1)" : ""}
                                {(this.state.players[1].position == 36) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p>{(this.state.players[0].position == 35) ? "(P1)" : ""}
                                {(this.state.players[1].position == 35) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p>{(this.state.players[0].position == 34) ? "(P1)" : ""}
                                {(this.state.players[1].position == 34) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 33) ? "(P1)" : ""}
                                {(this.state.players[1].position == 33) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p>{(this.state.players[0].position == 32) ? "(P1)" : ""}
                                {(this.state.players[1].position == 32) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell GreenProperty EveryFont">
                            <p>{(this.state.players[0].position == 31) ? "(P1)" : ""}
                                {(this.state.players[1].position == 31) ? "(P2)" : ""}</p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[27].name}</p>
                            <p>Price: ${this.state.bank.property[27].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Luxury Tax</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[26].name}</p>
                            <p>Price: ${this.state.bank.property[26].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[25].name}</p>
                            <p>Price: ${this.state.bank.property[25].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[24].name}</p>
                            <p>Price: ${this.state.bank.property[24].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[23].name}</p>
                            <p>Price: ${this.state.bank.property[23].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[22].name}</p>
                            <p>Price: ${this.state.bank.property[22].price}</p>
                        </div>
                    </div>
                </div>
                <div class="Table TableBottom">
                    <div class="Heading">
                        <div class="Cell Square HeaderSquare">
                            <p>{(this.state.players[0].position == 10) ? "(P1)" : ""}
                                {(this.state.players[1].position == 10) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p>{(this.state.players[0].position == 9) ? "(P1)" : ""}
                                {(this.state.players[1].position == 9) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p>{(this.state.players[0].position == 8) ? "(P1)" : ""}
                                {(this.state.players[1].position == 8) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 7) ? "(P1)" : ""}
                                {(this.state.players[1].position == 7) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell LightBlueProperty EveryFont">
                            <p>{(this.state.players[0].position == 6) ? "(P1)" : ""}
                                {(this.state.players[1].position == 6) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell Train EveryFont">
                            <p>{(this.state.players[0].position == 5) ? "(P1)" : ""}
                                {(this.state.players[1].position == 5) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 4) ? "(P1)" : ""}
                                {(this.state.players[1].position == 4) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell BrownProperty EveryFont">
                            <p>{(this.state.players[0].position == 3) ? "(P1)" : ""}
                                {(this.state.players[1].position == 3) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{(this.state.players[0].position == 2) ? "(P1)" : ""}
                                {(this.state.players[1].position == 2) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell BrownProperty EveryFont">
                            <p>{(this.state.players[0].position == 1) ? "(P1)" : ""}
                                {(this.state.players[1].position == 1) ? "(P2)" : ""}</p>
                        </div>
                        <div class="Cell Square HeaderSquare">
                            <p>{(this.state.players[0].position == 0) ? "(P1)" : ""}
                                {(this.state.players[1].position == 0) ? "(P2)" : ""}</p>
                        </div>
                    </div>
                    <div class="Row">
                        <div class="Cell SquareBottom HeaderSquare">
                            <p>JAIL, JUST VISITING</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[5].name}</p>
                            <p>Price: ${this.state.bank.property[5].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[4].name}</p>
                            <p>Price: ${this.state.bank.property[4].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[3].name}</p>
                            <p>Price: ${this.state.bank.property[3].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[2].name}</p>
                            <p>Price: ${this.state.bank.property[2].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Income Tax</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[1].name}</p>
                            <p>Price: ${this.state.bank.property[1].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chest</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>{this.state.bank.property[0].name}</p>
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