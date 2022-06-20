import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDarkMode]'
})
export class DarkmodeDirective{

    darkTheme: boolean = false;

    constructor(private renderer: Renderer2){}

    @HostListener('click') toggleDarkMode(){
 
        this.darkTheme = !this.darkTheme;

        this.darkTheme ? this.renderer.addClass(document.body, 'dark-theme') : this.renderer.removeClass(document.body, 'dark-theme');
    }
}