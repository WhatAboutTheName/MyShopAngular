export class GameService{

    flagFirstStart = true;
    flagJump = false;
    flagStart = true;

    jumpEvent = 'down';
    jumpIncrement = 1;
    finalPlaerJump = 0;
    plaerJump = 0;
    plaerDistance: any;

    amountCheck = 0;
    successJump = 0;
    
    triangleGo = 'wait';
    triangleFastGo = 'wait';

    plaerDiv: any;
    triangleDiv: any;
    triangleFastDiv: any;

    triangleLeft: any;
    triangleFastLeft: any;

    start(){
        this.flagStart = false;
        this.go();
    }

    jump(){
        this.flagJump = true;
        if(this.finalPlaerJump === this.plaerJump || this.flagFirstStart === true){
            this.flagFirstStart = false;
            this.down();
            this.check();
            this.amountCheck += 1;
            setTimeout( t => this.change(), 390);
            setTimeout( t => this.plaerJump = this.finalPlaerJump, 800);
        }
    }

    change(){
        this.flagJump = false;
        this.down();
        this.finalPlaerJump += this.jumpIncrement;
    }

    down(){
        this.flagJump === true ? this.jumpEvent = 'up' : this.jumpEvent = 'down';
    }

    go(){
        if(this.flagStart === false){
            setTimeout( t => this.triangleGo = 'go', 1800);
            setTimeout( t => this.triangleGo = 'wait', 3600);
            setTimeout( t => this.go(), 3600);
        } if(this.successJump >= 10){
            setTimeout( t => this.triangleFastGo = 'go', 1000);
            setTimeout( t => this.triangleFastGo = 'wait', 2000);
        }
    }

    check(){
        if(this.flagStart === false){
            setTimeout( t => this.triangleDivLeft(), 1);
            setTimeout( t => this.check(), 1);
        } 
        if(this.successJump >= 10){
            setTimeout( t => this.triangleFastDivLeft(), 1);
        }
    }

    triangleDivLeft(){
        this.triangleDiv = document.querySelectorAll(".triangle")[0],
        this.triangleLeft = this.triangleDiv.getBoundingClientRect();
        Math.round(this.triangleLeft.left) === 452 ? this.result() : false;
    }

    triangleFastDivLeft(){
        this.triangleFastDiv = document.querySelectorAll(".triangleFast")[0],
        this.triangleFastLeft = this.triangleFastDiv.getBoundingClientRect();
        Math.round(this.triangleFastLeft.left) === 450 ? this.result() : false;
    }

    plaerDivTop(){
        this.plaerDiv = document.querySelectorAll(".plaer")[0];
        this.plaerDistance = this.plaerDiv.getBoundingClientRect();
    }

    result(){
        this.plaerDivTop();
        if(this.plaerDistance.top <= 205){
            this.successJump = this.amountCheck;
        } else {
            this.flagStart = false;
            this.flagStart = true;
            this.successJump = 0;
            this.amountCheck = 0;
        }
    }

}