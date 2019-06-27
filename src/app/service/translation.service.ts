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
                'Remove': 'Удалить',
                'Change': 'Изменить',
                'Apply': 'Принять',
                'Price': 'Цена:$',
                'Remove all': 'Удалить всё',
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
                'RequestAccepted': 'Запрос принимается',
                'Start': 'Старт',
                'Jump': 'Прыжки',
                'where': 'Где я',
                'about0': 'На My Shop – модной платформе распродаж.',
                'about1':'Наша гордость – больше 1000 брендов без переплат.',
                'about2':'Здесь огромный выбор одежды и аксессуаров для взрослых и детей всегда со скидками до 90%.',
                'about3':'Но вы найдете в My Shop и косметику, и симпатичные вещи для дома.'
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
                'Remove': 'Remove',
                'Change': 'Change',
                'Apply': 'Apply',
                'Price': 'Price:$',
                'Remove all': 'Remove all',
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
                'RequestAccepted': 'Request is accepted',
                'Start': 'Start',
                'Jump': 'Jump',
                'where': 'Where am I',
                'about0': 'On My Shop – fashionable platform sales.' ,
                'about1': 'We are proud of our more than 1,000 brands overpayments.',
                'about2': 'There is a huge selection of clothing and accessories for adults and children always with discounts up to 90%.',
                'about3': 'But you will find in My Shop both cosmetics, and nice things for the house.'

            }
        }
    };

    constructor(private cartService: CartService) { }

    check(text: any){
        localStorage.setItem('language', JSON.stringify(text));
    }

    fixed(){
        String(JSON.parse(localStorage.getItem('language'))) !== 'undefined' ? this.language = JSON.parse(localStorage.getItem('language')) : false;
        this.language === null ? this.language = 'eng' : false;
    }

    translate(value: string): string {
        this.fixed();
        if(this.language === 'ru'){
            this.cartService.flagAceptChange();
        } else {
            this.cartService.flagAcept = false;
        }
        if ( this.dictionary[this.language] != null ) {
            return this.dictionary[this.language].values[value];
        }
    }
}