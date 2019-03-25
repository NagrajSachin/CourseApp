import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appdropdown]'
})

export class dropDownDirective {
    @HostBinding('class.open') isOpen = false;
 
    @HostListener('click') toOpen() {
        this.isOpen = !this.isOpen;
    }
}