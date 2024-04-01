let deck = {
    cards: [
        {'img': '2C.png', 'value': 2, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},
        {'img': '2H.png', 'value': 2, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '2D.png', 'value': 2, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '2S.png', 'value': 2, suit: 'spades', 'dealt': false, isAce: false, isJack: false},

        {'img': '3C.png', 'value': 3, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},
        {'img': '3H.png', 'value': 3, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '3D.png', 'value': 3, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '3S.png', 'value': 3, suit: 'spades', 'dealt': false, isAce: false, isJack: false},

        {'img': '4S.png', 'value': 4, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '4H.png', 'value': 4, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '4D.png', 'value': 4, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '4C.png', 'value': 4, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '5S.png', 'value': 5, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '5H.png', 'value': 5, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '5D.png', 'value': 5, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '5C.png', 'value': 5, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '6S.png', 'value': 6, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '6H.png', 'value': 6, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '6D.png', 'value': 6, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '6C.png', 'value': 6, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '7S.png', 'value': 7, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '7H.png', 'value': 7, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '7D.png', 'value': 7, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '7C.png', 'value': 7, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '8S.png', 'value': 8, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '8H.png', 'value': 8, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '8D.png', 'value': 8, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '8C.png', 'value': 8, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '9S.png', 'value': 9, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '9H.png', 'value': 9, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '9D.png', 'value': 9, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '9C.png', 'value': 9, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': '10S.png', 'value': 10, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': '10H.png', 'value': 10, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': '10D.png', 'value': 10, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': '10C.png', 'value': 10, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': 'JS.png', 'value': 10, suit: 'spades', 'dealt': false, isAce: false, isJack: true},
        {'img': 'JH.png', 'value': 10, suit: 'hearts', 'dealt': false, isAce: false, isJack: true},
        {'img': 'JD.png', 'value': 10, suit: 'diamonds', 'dealt': false, isAce: false, isJack: true},
        {'img': 'JC.png', 'value': 10, suit: 'clubs', 'dealt': false, isAce: false, isJack: true},

        {'img': 'QS.png', 'value': 10, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': 'QH.png', 'value': 10, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': 'QD.png', 'value': 10, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': 'QC.png', 'value': 10, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': 'KS.png', 'value': 10, suit: 'spades', 'dealt': false, isAce: false, isJack: false},
        {'img': 'KH.png', 'value': 10, suit: 'hearts', 'dealt': false, isAce: false, isJack: false},
        {'img': 'KD.png', 'value': 10, suit: 'diamonds', 'dealt': false, isAce: false, isJack: false},
        {'img': 'KC.png', 'value': 10, suit: 'clubs', 'dealt': false, isAce: false, isJack: false},

        {'img': 'AS.png', 'value': 1, suit: 'spades', 'dealt': false, isAce: true, isJack: false},
        {'img': 'AH.png', 'value': 1, suit: 'hearts', 'dealt': false, isAce: true, isJack: false},
        {'img': 'AD.png', 'value': 1, suit: 'diamonds', 'dealt': false, isAce: true, isJack: false},
        {'img': 'AC.png', 'value': 1, suit: 'clubs', 'dealt': false, isAce: true, isJack: false}
    ],
    specialImages:[
        {'img': 'red_back.png'},
        {'img': 'winner.png'},
        {'img': 'looser.png'},
        {'img': 'blackJack.png'},
        {'img': 'busted.png'}
    ],
    dealtCards : 0,
    getCard : function(  hand ){
        let gotGoodCard = false;
        let card = null
        while ( !gotGoodCard ){
            let rNum = Math.floor( Math.random() * deck.cards.length );
            card = deck.cards[rNum];
            if ( !card.dealt ){
                card.dealt = true;
                this.dealtCards += 1;
                return card;
            } else if ( this.dealtCards == deck.cards.length ){
                this.dealtCards = 0;
                for( let i=0; i<this.cards.length; i++ ){
                    this.cards[i].dealt = false;
                    if ( this.inTheHand( hand, this.cards[i])){
                        this.cards[i].dealt = true;
                        this.dealtCards += 1;
                    }
                }
            }
        }
        return card;
    },
    getBackOfCard : function(){
        let card = null;
        card = deck.specialImages[0];
        return card;

    },
    inTheHand : function(  hand, card ) {
        for( let i=0; i<hand.length; i++ ){
            if ( hand[i].img == card.img ){
                return true;
            }
        }
        return false;
    },
};
let UI = {
    showOverallStatus : function (){
       let balance = `<span> ${User.totalBalance}`;
        let bet = `<span> ${User.bet}`;
        let games = `<span> ${User.attempts}`;
        let wins = `<span> ${User.totalWins}`;
        let losses = `<span> ${User.totalLosses}`;
        document.getElementById("balance").innerHTML = balance;
        document.getElementById("bet").innerHTML = bet;
        document.getElementById("games").innerHTML = games;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    },
    showPointsAndHits : function(){
        let userPoints = `<span> ${User.userPoints}`;
        let userHits = `<span> ${User.userHits}`;
        let dealerPoints = `<span> ${User.dealerPoints}`;
        let dealerHits = `<span> ${User.dealerHits}`;
        document.getElementById("userPts").innerHTML = userPoints;
        document.getElementById("userHits").innerHTML = userHits;
        document.getElementById("dealerPts").innerHTML = dealerPoints;
        document.getElementById("dealerHits").innerHTML = dealerHits;

    },
    setBet : function( userBet, errorMessage){
        let errorMsg = "";
        let gotError = false;
        User.bet = document.getElementById( userBet ).value;
        if ( User.bet <= 0 || User.bet > 500 || User.bet === undefined || User.bet == null){
            errorMsg = `<span style='color:red'> Bet must be between $1 and $500!  </span>`;
            gotError = true;
        }
        else if (isNaN(User.bet)){
            errorMsg = `<span style='color:red'> You must enter a number! </span>`;
            gotError = true;
        }
        else {
             oStr = `<span style='color:Red'>  Bet: ${User.bet}. Click Hit or Stick to Continue </span>`;
            document.getElementById("putBetHere").innerHTML = oStr;
        }
        document.getElementById( errorMessage ).innerHTML = errorMsg;
        return gotError;
    },

    displayHand : function ( hand, id ) {
        let resObj = document.getElementById( id  );
        let oStr = "";
        for ( let i=0; i<hand.length; i++ ){
            let cImg = hand[i].img;
            oStr += `<img class='cardImg' src='imgs/${cImg}'  alt='Card' />`;
        }
        resObj.innerHTML = oStr;
        return hand;
    }
}

let User = {
    hand: [],
    userPoints: 0,
    userHits: 0,
    dealerHand: [],
    dealerPoints: 0,
    dealerHits: 0,
    totalBalance: 1000,
    totalWins: 0,
    totalLosses: 0,
    bet: 0,
    attempts: 0,
    getUserPoints : function (){
        let points = this.userPoints;
        for (let i =0; i<this.hand.length; i++){
            points += this.hand[i].value;
        }
        if (this.hand.length === 2 && (this.hand[0].isAce === true || this.hand[1].isAce === true)){
            points += 10;
        }
        points -= this.userPoints;
        this.userPoints = points;
    },
    getDealerStartingPoints : function (){
        let points = this.dealerPoints;
        points = this.dealerHand[0].value;
        if (this.dealerHand[0].isAce === true){
            points += 10;
        }
        this.dealerPoints = points;
    },
    getDealerPoints : function (){
        let points = this.dealerPoints;
        for (let i =0; i<this.dealerHand.length; i++){
            if (this.dealerHand[i].isAce === true){
                points += 10;
            }
            points += this.dealerHand[i].value;
        }
        points -= this.dealerPoints;
        this.dealerPoints = points;
    }
}
let blackJack = {
    currentGame: function(userHand, dealerHand, idUser, idDealer){
        let gameOver = false;
        for(let i =0; i<2; i++){
            blackJack.setHandUser(userHand);
        }
        blackJack.setHandDealer(dealerHand)
        blackJack.setBackOfCard();
        UI.displayHand( userHand, idUser);
        UI.displayHand( dealerHand, idDealer);
        User.hand = userHand;
        User.dealerHand = dealerHand;
        let dealerBtn = document.getElementById("dealerButton");
        dealerBtn.style.display = "none";
        let bt1 = document.getElementById("hitButton");
        let bt2 = document.getElementById("stickButton");
        bt1.style.display = "inline";
        bt2.style.display = "inline";
        User.getUserPoints();
        User.getDealerStartingPoints();
        UI.showPointsAndHits();
        if ((User.hand[0].isAce === true && User.hand[1].isJack === true) || (User.hand[0].isJack === true && User.hand[1].isAce === true)){
            let winner = document.getElementById("youWinUser");
            winner.style.display = "inline";
            blackJackUser();
            oStr = `<span style='color:Red'> You Got BlackJack! 2x Reward! </span>`;
            document.getElementById("putBetHere").innerHTML = oStr;
        }
    },
    setHandUser : function() {
        let hand = User.hand;
        hand.push(deck.getCard(hand));
    },
    setHandDealer : function (){
        let hand = User.dealerHand;
        hand.push(deck.getCard(hand));

    },
    setBackOfCard : function (){
        let hand = User.dealerHand;
        hand.push(deck.getBackOfCard(hand));
    },

}
function blackJackUser(){
    dealerLoses();
    let newBalance = User.totalBalance + parseInt(User.bet);
    User.totalBalance = newBalance;
    UI.showOverallStatus();
    let black = document.getElementById("blackjackUser");
    black.style.display = "inline";
}
function userLoses(){
    User.totalLosses ++;
    User.attempts ++;
    User.totalBalance -= User.bet;
    UI.showOverallStatus();
    let winner = document.getElementById("youWinDealer");
    winner.style.display = "inline";
    let bt1 = document.getElementById("hitButton");
    let bt2 = document.getElementById("stickButton");
    let dealerBtn = document.getElementById("dealerButton");
    let betArea = document.getElementById("betArea");
    let looser = document.getElementById("looserUser");
    looser.style.display = "inline";
    dealerBtn.style.display = "none";
    bt1.style.display = "none";
    bt2.style.display = "none";
    betArea.style.display = "inline";
}
function dealerLoses(){
    User.totalWins ++;
    User.attempts ++;
    let newBalance = User.totalBalance + parseInt(User.bet);
    User.totalBalance = newBalance;
    UI.showOverallStatus();
    let bt1 = document.getElementById("hitButton");
    let bt2 = document.getElementById("stickButton");
    let dealerBtn = document.getElementById("dealerButton");
    let betArea = document.getElementById("betArea");
    let looser = document.getElementById("looserDealer");
    looser.style.display = "inline";
    dealerBtn.style.display = "none";
    bt1.style.display = "none";
    bt2.style.display = "none";
    betArea.style.display = "inline";
}
function hit(){
    let idUser = "userCards";
    blackJack.setHandUser(User.hand);
    UI.displayHand(User.hand, idUser);
    User.userHits ++;
    User.getUserPoints();
    UI.showPointsAndHits();
    if (User.userPoints > 21){
        userLoses();
        let winner = document.getElementById("youWinDealer");
        winner.style.display = "inline";
        let bust = document.getElementById("bustedUser");
        bust.style.display = "block";
        userBustAnimation();
        oStr = `<span style='color:Red'> You Busted! Bummer </span>`;
        document.getElementById("putBetHere").innerHTML = oStr;
    }
}
function stick(){
    let bt1 = document.getElementById("hitButton");
    let bt2 = document.getElementById("stickButton");
    let dealerBtn = document.getElementById("dealerButton");
    dealerBtn.style.display = "inline";
    bt1.style.display = "none";
    bt2.style.display = "none";
}
function dealerTurn(){
    let idDealer = "dealerCards";

    if(User.dealerHand[1] === deck.specialImages[0]){
        User.dealerHand.pop();
        blackJack.setHandDealer(User.dealerHand);
        User.dealerHits --;
    }
    else{
        blackJack.setHandDealer(User.dealerHand);
    }
    User.dealerHits ++;
    UI.displayHand(User.dealerHand, idDealer);
    User.getDealerPoints();
    UI.showPointsAndHits();

    let bt1 = document.getElementById("hitButton");
    let bt2 = document.getElementById("stickButton");
    let dealerBtn = document.getElementById("dealerButton");
    if ((User.dealerHand[0].isAce === true && User.dealerHand[1].isJack === true) || (User.dealerHand[0].isJack === true && User.dealerHand[1].isAce === true)){
        let blackJack = document.getElementById("blackjackDealer");
        blackJack.style.display = "inline";
        userLoses();
        oStr = `<span style='color:Red'> Dealer Got BlackJack! Tough Luck </span>`;
        document.getElementById("putBetHere").innerHTML = oStr;
    }
    else{
        if (User.dealerPoints < 17){
            dealerBtn.style.display = "inline";
            bt1.style.display = "none";
            bt2.style.display = "none";
        }
        else if (User.dealerPoints > 21){
            dealerLoses();
            let winner = document.getElementById("youWinUser");
            winner.style.display = "inline";
            let bust = document.getElementById("bustedDealer");
            bust.style.display = "block";
            dealerBustAnimation();
            oStr = `<span style='color:Red'> Dealer Busts! Feeling Lucky? </span>`;
            document.getElementById("putBetHere").innerHTML = oStr;
        }
        else if (User.dealerPoints >= 17 && User.dealerPoints <= 21){
            if (User.dealerPoints > User.userPoints){
                userLoses();
                oStr = `<span style='color:Red'> Dealer Wins! </span>`;
                document.getElementById("putBetHere").innerHTML = oStr;
            }
            else if (User.dealerPoints === User.userPoints){
                userLoses();
                oStr = `<span style='color:Red'> Dealer Wins! No such thing as a tie! </span>`;
                document.getElementById("putBetHere").innerHTML = oStr;
            }
            else{
                dealerLoses();
                let winner = document.getElementById("youWinUser");
                winner.style.display = "inline";
                oStr = `<span style='color:Red'> You Win! </span>`;
                document.getElementById("putBetHere").innerHTML = oStr;
            }
        }
        else{
            bt1.style.display = "inline";
            bt2.style.display = "inline";
            dealerBtn.style.display = "none";
        }
    }

}
function beginGame() {
    User.hand = [];
    User.dealerHand = [];
    User.userPoints = 0;
    User.userHits = 0;
    User.dealerPoints = 0;
    User.dealerHits = 0;
    let idUser = "userCards";
    let idDealer = "dealerCards";
    gotError = UI.setBet( "userBet", "errorMessage");
    UI.showOverallStatus();
    if (gotError === false){
        let userBust = document.getElementById("bustedUser");
        let betArea = document.getElementById("betArea");
        let winnerDealer = document.getElementById("youWinDealer");
        let looserUser = document.getElementById("looserUser");
        let winnerUser = document.getElementById("youWinUser");
        let dealerBust = document.getElementById("bustedDealer");
        let looserDealer = document.getElementById("looserDealer");
        let blackUser = document.getElementById("blackjackUser");
        let blackDealer = document.getElementById("blackjackDealer");
        blackDealer.style.display = "none";
        blackUser.style.display = "none";
        looserDealer.style.display = "none";
        dealerBust.style.display = "none";
        winnerUser.style.display = "none";
        looserUser.style.display = "none";
        winnerDealer.style.display = "none";
        userBust.style.display = "none";
        betArea.style.display = "none";
        blackJack.currentGame(User.hand, User.dealerHand, idUser, idDealer);
    }


}

function userBustAnimation() {
    let id = null;
    let elem = document.getElementById("bustedUser");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    let  direction = 'R';
    function frame() {
        if ( direction  == 'R')  pos++;
        else pos--;

        if ( pos >= 50 ){
            direction = "L";
        }
        if ( pos <0 ) {
            direction = 'R';
        }
        elem.style.left = pos + 'px';
    }
}
function dealerBustAnimation() {
    let id = null;
    let elem = document.getElementById("bustedDealer");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    let  direction = 'R';
    function frame() {
        if ( direction  == 'R')  pos++;
        else pos--;

        if ( pos >= 50 ){
            direction = "L";
        }
        if ( pos <0 ) {
            direction = 'R';
        }
        elem.style.left = pos + 'px';
    }
}