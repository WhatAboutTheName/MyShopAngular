export class CartService{

    cartHtmlObj = [];
    allPrice: number = 0;
    allAmount: number = 0;
    flagChange = false;
    flagOrder = false;
    flagCategories = false;
    flagAll = false;
    flagAcept = false;

    start(){
        if(localStorage.getItem('cart') !== null){
            this.flagAll = true;
        }
    }

    addContent(){
        this.cartHtmlObj =  [];
        if(localStorage.getItem('cart') != null){
            let createJson = JSON.parse(localStorage.getItem('cart'));
            for (let el of createJson) {
                this.cartHtmlObj.push(el);
            }
            this.flagCategories = true;
        }
    }

    apply(id: number, amount: number){
        this.flagChange = !this.flagChange;
        amount = amount < 0 && amount >= -100 ? -1 + amount * -1: amount > 0 && amount <= 100 ? amount : 1;
        let amountNew = Math.round(amount);
        for(let i = 0; i < this.cartHtmlObj.length; i++){
            if(this.cartHtmlObj[i].id === id){
                this.cartHtmlObj[i].amount = amountNew;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this.cartHtmlObj));
        this.orderContent();
    }

    remove(id: number){
        this.cartHtmlObj = this.cartHtmlObj.filter( el => el.id !== id);
        this.removeLocalS();
        this.orderContent();
        this.checkLocalCart();
    }

    checkLocalCart(){
        let localCart = localStorage.getItem('cart');
        localCart.length === 2 ? this.removeAll() : false;
    }

    removeLocalS(){
        localStorage.setItem('cart', JSON.stringify(this.cartHtmlObj));
    }

    orderContent(){
        if(this.allAmount === 0){
            for(let el of this.cartHtmlObj){
                this.allAmount += el.amount;
                this.allPrice += el.price * el.amount;
            }
        } else {
            this.allPrice = 0;
            this.allAmount = 0;
            this.orderContent();
        }
    }

    cancel(){
        this.flagOrder = !this.flagOrder;
    }

    flagAceptChange(){
        this.flagAcept = true;
    }

    acept(){
        this.flagOrder = !this.flagOrder;

        this.flagAcept === false ?   alert("Request is accepted") : alert("Запрос принят");
    } 

    removeAll(){
        this.removeLocalS();
        this.orderContent();
        localStorage.removeItem('cart');
        this.flagCategories = false;
        this.cartHtmlObj = [];
        this.allPrice = 0;
        this.allAmount = 0;
        this.flagAll = !this.flagAll;
    
    }
}