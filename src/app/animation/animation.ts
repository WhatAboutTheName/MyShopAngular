import {trigger, animate, style, group, query, transition, state, keyframes} from '@angular/animations';

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

export const alert = trigger('Creation', [
  transition('void => *', [
    animate('1s', style({
      opacity: 0
    }))
  ])
]);

export const triangleStart = trigger('triangle', [
  state('wait', style({ 
    opacity: 0
  })),
  state('go', style({ 
    opacity: 1
  })),
  transition('wait => go', [
    animate('1.8s', keyframes([
      style({opacity: 1, transform: 'translateX(-200px)', offset: 0.5}),
      style({opacity: 1, transform: 'translateX(-550px)', offset: 0.9}),
      style({opacity: 0, transform: 'translateX(-600px)', offset: 1})
    ]))
  ])
]);

export const jump = trigger('plaer', [
  state('down', style({ 
    'background-color': 'rgb(83, 214, 31)'
  })),
  state('up', style({ 
    'background-color': 'rgb(83, 214, 31)'
  })),
  transition('down => up', [
    animate('0.4s', style({
      transform: 'translateY(-65px)'
    }))
  ]),
  transition('up => down', [
    animate('0.4s', style({
      top: '170px',
      transform: 'translateY(65px)'
    }))
  ])
])  