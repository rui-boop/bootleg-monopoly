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

        if (newPosition > 10) {
            newPosition = newPosition % 10;
        }
        this.state.players[this.state.turn].position = newPosition;
        
    }

    endTurn() {
        if (this.state.position > 10) {
            this.state.players[this.state.turn].money = this.state.players[this.state.turn].money + 200;
            this.state.position = this.state.position % 10;
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
                            <p>Kentucky Avenue</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell EveryFont">
                            <p>Chance</p>
                        </div>
                        <div class="Cell">
                            <p>Indiana Avenue</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>Illinois Avenue</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>B&O Railroad</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>Atlantic Avenue</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>Ventnor Avenue</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>Water Works</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
                        </div>
                        <div class="Cell">
                            <p>Marvin Gardens</p>
                            <p>Price: ${this.state.bank.property[0].price}</p>
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
                        <div class="Cell">
                            <p>NY Avenue</p>
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