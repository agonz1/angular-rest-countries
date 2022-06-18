import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    isActive: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    @HostListener('click') toggleOpen(){
        this.isActive ? this.renderer.removeClass(this.elRef.nativeElement, "active") : this.renderer.addClass(this.elRef.nativeElement, "active");
        this.isActive = !this.isActive;
    }
}