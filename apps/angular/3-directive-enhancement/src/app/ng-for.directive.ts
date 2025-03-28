import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngFor]',
})
export class NgForDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  @Input({ required: true }) ngForOf!: any[];
  @Input({ required: true }) ngForEmpty!: TemplateRef<any>;

  ngOnInit() {
    if (this.ngForOf.length > 0) {
      this.ngForOf.forEach((item, index) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: item,
          index,
        });
      });
    } else {
      this.viewContainerRef.createEmbeddedView(this.ngForEmpty, {});
    }
  }
}
