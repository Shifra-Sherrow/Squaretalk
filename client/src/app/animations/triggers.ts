import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOutTrigger = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(400, style({ opacity: 0 }))
  ])
]);

export const delayFadeInOutTrigger = trigger('delayFadeInOut', [
  transition(':enter', [
    style({ display: 'none' }),
    animate('0.3s 0.35s', style({ display: 'block' }))
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 }))
  ])
]);
