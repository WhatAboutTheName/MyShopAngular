export class GameService{

    flagFirstStart = true;
    flagJump = false;
    flagStart = true;

    jumpEvent = 'down';
    jumpIncrement = 1;
    finalPlaerJump = 0;
    plaerJump = 0;
    plaerDistance: any;

    successJump = 0;
    
    triangleGo = 'wait';

    start(){
        this.flagStart = false;
        this.go();
    }

    jump(){
        this.flagJump = true;
        if(this.finalPlaerJump === this.plaerJump || this.flagFirstStart === true){
            this.flagFirstStart = false;
            this.down();
            setTimeout( t => this.change(), 400);
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
            setTimeout( t => this.jumpCheck(), 3390);
            setTimeout( t => this.triangleGo = 'go', 1800);
            setTimeout( t => this.triangleGo = 'wait', 3600);
            setTimeout( t => this.go(), 3600);
        }
    }

    jumpCheck(){
        let plaerDiv = document.querySelectorAll(".plaer")[0];
        this.plaerDistance = plaerDiv.getBoundingClientRect();
       // console.log(this.plaerDistance.top);
        if(this.plaerDistance.top <= 210){
            this.successJump += 1;
        } else {
            this.flagStart = false;
            this.flagStart = true;
            this.successJump = 0;
        }
    }
}