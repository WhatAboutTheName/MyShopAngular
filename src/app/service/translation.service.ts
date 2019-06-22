import { Injectable } from '@angular/core';
import { CartService } from '../service/cart.service';


export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}

@Injectable()
export class TranslationService {

    public languages = ['ru', 'eng'];

    public language = 'eng';

    public languageSave = [];

    private dictionary: {[key: string]: TranslationSet} = {
        'ru' : {
            languange: 'ru',
            values: {
                'example': 'тест',
                'In cart': 'в карзину',
                'MEN’S': 'Мужская',
                'Categories': 'Категории',
                'product': 'товары',
                'cart': 'карзина',
                'about us': 'о нас',
                'Product add': 'Товар добавлен',
                'Empty cart': 'Корзина пуста',
                'Amount': 'Количество',
                'Delete': 'Удалить',
                'Change': 'Изменить',
                'Apply': 'Принять',
                'Price': 'Цена:$',
                'Delete all': 'Удалить всё',
                'PlaceOrder': 'Оформить заказ',
                'All Price': 'Цена за всё',
                'In the cart': 'В карзине',
                'Your order': 'Ваш заказ',
                'acept': 'принять',
                'cancel': 'отмена',
                'EnterName': 'Введите ваше имя',
                'EnterNumber': 'Введите ваш номер телефона',
                'WrongNumber': 'Неправильный номер',
                'IncorrectName': 'Неправильное имя',
                'RequestAccepted': 'Запрос принимается'
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'example': 'test',
                'In cart': 'In cart',
                'MEN’S': 'MEN’S',
                'Categories': 'Categories',
                'product': 'product',
                'cart': 'cart',
                'about us': 'about us',
                'Product add': 'Product add',
                'Empty cart': 'Empty cart',
                'Amount': 'Amount',
                'Delete': 'Delete',
                'Change': 'Change',
                'Apply': 'Apply',
                'Price': 'Price:$',
                'Delete all': 'Remove all',
                'PlaceOrder': 'Place your order',
                'All Price': 'All Price',
                'In the cart': 'In the cart',
                'Your order': 'Your order',
                'acept': 'acept',
                'cancel': 'cancel',
                'EnterName': 'Enter your name',
                'EnterNumber': 'Enter your phone number',
                'WrongNumber': 'WrongNumber',
                'IncorrectName': 'Incorrect name',
                'RequestAccepted': 'Request is accepted'

            }
        }
    };

    constructor(private cartService: CartService) { }

    check(){
        let languageArr = [];
        
        if( this.language === 'eng' ){
            if( this.languageSave[0] === 'ru'){
                languageArr[0] = 'eng';
                localStorage.setItem('language', JSON.stringify(languageArr));
            }
        } else {
            languageArr[0] = 'ru';
            localStorage.setItem('language', JSON.stringify(languageArr));
        }
        this.languageSave = JSON.parse(localStorage.getItem('language'));
        this.language = this.languageSave[0];
        
    }

    translate(value: string): string {
        this.check();
        if(this.languageSave[0] === 'ru'){
            this.cartService.flagAceptChange();
        } else {
            this.cartService.flagAcept = false;
        }
        if ( this.dictionary[this.languageSave[0]] != null ) {
            return this.dictionary[this.languageSave[0]].values[value];
        }
    }
}