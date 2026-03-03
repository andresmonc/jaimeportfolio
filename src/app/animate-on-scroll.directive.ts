import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[appAnimateOnScroll]",
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = "fade-in-up";

  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add("aos-init", this.animationClass);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add("aos-animate");
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
