import { Directive, Input, Host, TemplateRef, ViewContainerRef, OnInit, DoCheck } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Directive({
  selector: '[switchCases]'
})
export class SwitchCasesDirective implements OnInit, DoCheck {

  @Input() switchCases!: any[];

  private ngSwitch: any;
  private _created = false;

  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<Object>,
              @Host() ngSwitch: NgSwitch) {
    this.ngSwitch = ngSwitch;
  }

  ngOnInit(): void {
    (this.switchCases || []).forEach(() => this.ngSwitch._addCase());
  }

  ngDoCheck(): void {
    let enforce = false;
    (this.switchCases || []).forEach(value => enforce = this.ngSwitch._matchCase(value) || enforce);
    this.enforceState(enforce);
  }

  enforceState(created: boolean): void {
    if (created && !this._created) {
      this._created = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!created && this._created) {
      this._created = false;
      this.viewContainer.clear();
    }
  }

}
