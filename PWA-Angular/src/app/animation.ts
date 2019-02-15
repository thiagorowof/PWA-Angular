import {sequence, state, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';


const query = (s,a,o={optional:true})=>q(s,a,o);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()), 
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
            style({ transform: 'translateX(-100%)' }))
        ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
            style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);


export const slidingDoorAnimation = trigger('slidingDoorAnimation', 
  [
    state('out', 
      style({ width: '30%'}),
      { params: { outWidth: '0%'}}
    ),
    transition('* <=> *',animate('{{ time }}'))
  ]
);

export const moveAnimation = trigger('moveAnimation', 
  [
    state('in', 
      style({transform: 'translateX(-400px)',display:'none'})
    ),
    state('out', 
      style({transform: 'translateX(0px)'})
    ),
    transition('* => *', animate('500ms ease'))
  ]
);