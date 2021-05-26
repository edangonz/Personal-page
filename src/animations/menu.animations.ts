import { trigger, state, style, transition, animate } from '@angular/animations';

export const showUpLeftMenu = trigger('showUpLeftMenu',[
    state('true', style({ transform: 'translateX(0)' })),
    state('false', style({ transform: 'translateX(-100%)' })),
    transition('true <=> false', animate('500ms cubic-bezier(.17,.67,.42,1.27)'))
]);