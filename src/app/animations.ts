import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideIn =
    trigger('slideIn', [
        state('*', style({
            transform: 'translateX(100%)',
        })),
        state('in', style({
            transform: 'translateX(0)',
        })),
        state('out', style({
            transform: 'translateX(-100%)',
        })),
        transition('* => in', animate('600ms ease-in')),
        transition('in => out', animate('600ms ease-in'))
    ]);


export const fadeInOut =
    trigger('fadeInOut', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({ opacity: 0 }),
            animate(500, style({ opacity: 1 }))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            animate(500, style({ opacity: 0 }))
        ])
    ])