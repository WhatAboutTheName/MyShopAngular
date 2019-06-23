import { Jacket } from '../interfaces/jacket.interface';

export class ContentService{

    jackets: Jacket[];
    allLabels: any[];
    product = [];
    productLabel = [];
    falagAlert = false;

    addCartLocalStorage(product: any[]){
        localStorage.setItem('cart', JSON.stringify(product));
    }

    alert(){
        this.falagAlert = true;
        setTimeout( t =>  this.falagAlert = false, 1000);
    }

    addProduct(id: number, amount: number){

        this.alert();

        if(localStorage.getItem('cart') != null){
            this.ifTrue(id, amount);
        }

        amount = amount < 0 && amount >= -100 ? -1 + amount * -1: amount > 0 && amount <= 100 ? amount : 0;
        
        let amountNew = Math.round(amount);

        this.ifElse(id, amountNew);
    }  

    ifTrue(id: number, amount: number){
        this.product = JSON.parse(localStorage.getItem('cart'));
        this.product = this.product.filter(prod => prod.id !== id);
    }

    ifElse(id: number, amountNew: number){
        for(let i = 0; i <= this.jackets.length; i++){
            if(this.jackets[i].id === id){
                this.jackets[i].amount += amountNew;
                this.product.push(this.jackets[i]);
            }
            this.addCartLocalStorage(this.product);
        }
    }

    addCategories(){
        this.allLabels = this.jackets.reduce(function(labels, jacket) {
            if(!labels.includes(jacket.label)){
                 labels.push(jacket.label);
            }
             return labels;
        }, []);
    }

    getLabelContent(label: string){
        this.productLabel = this.jackets.filter(jacket => jacket.label === label);
        localStorage.setItem('label', JSON.stringify(this.productLabel));
    }

    addContent(){
        if(localStorage.getItem('label') != null){
            this.productLabel = [];
            let createJson = JSON.parse(localStorage.getItem('label'));
            for (let el of createJson) {
                this.productLabel.push(el);
            }
        }  
    }

    remove(id: number){
        this.product = this.product.filter(prod => prod.id !== id);
    }

    removeAll(){
        this.product = [];
    }
     
}