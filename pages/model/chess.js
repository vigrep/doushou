'use strict';

var ChessState = {
    CLOSE: "close",
    OPEN: "open",
    DEAD: "dead",
    CHOOSE: "choose"
};

var Tile = {
    ELEPHANT: 1,
    LION: 2,
    TIGER: 3,
    LEOPARD: 4,
    WOLF: 5,
    DOG: 6,
    CAT: 7,
    MOUSE: 8,
    properties: {
        1: {id: 1, name: "大象"},
        2: {id: 2, name: "狮子"},
        3: {id: 3, name: "老虎"},
        4: {id: 4, name: "豹子"},
        5: {id: 5, name: "狼"},
        6: {id: 6, name: "狗"},
        7: {id: 7, name: "猫"},
        8: {id: 8, name: "鼠"}
    }
};

var Performance = {
    RED: "red",
    GREEN: "green"
};

function Chessman(tile, performance) {
    this.id = Tile.properties[tile].id;
    this.name = Tile.properties[tile].name;
    this.performance = performance;
    this.level = this.id;
    this.location = [0, 0];
    this.state = ChessState.CLOSE;
    this.show = this.isShow();
}

Chessman.prototype = {

    setLocation: function (x, y) {
        this.location = [x, y];
    },
    getX: function () {
        return this.location[0];
    },
    getY: function () {
        return this.location[1];
    },
    setState: function (state) {
        this.state = state;
        this.show = this.isShow();
    },
    canMove: function () {
        return this.state === ChessState.OPEN;
    },
    isOpen: function () {
        return this.state === ChessState.OPEN;
    },
    isChoose: function () {
        return this.state === ChessState.CHOOSE;
    },
    isClosed: function () {
        return this.state === ChessState.CLOSE;
    },
    isDead: function () {
        return this.state === ChessState.DEAD;
    },
    isShow: function () {
        return this.state === ChessState.OPEN || this.state === ChessState.CHOOSE;
    },
    isFree: function () {
        return this.state === ChessState.OPEN || this.state === ChessState.CHOOSE;
    }

};

module.exports.Chessman = Chessman;
module.exports.ChessmanState= ChessState;
module.exports.Tile= Tile;
module.exports.Performance= Performance;

