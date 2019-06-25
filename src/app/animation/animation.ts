import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
        style({ position: 'fixed' }),
    ], { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.35s', style({ opacity: 1,transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.35s', style({ opacity: 0,transform: 'translateY(100%)' }))
      ], { optional: true })
    ])
  ])
]);

export const removeAnimation = trigger('remove', [
  transition('* => void', [
    animate('0.3s', style({
      opacity: 0,
      transform: 'scale(0)'
    }))
  ])
]);