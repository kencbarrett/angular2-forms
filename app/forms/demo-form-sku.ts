import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES],
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2 class="ui header">Demo Form:  Sku</h2>
    </div>
    <div class="panel-body">
        <form #f="ngForm"
            (ngSubmit)="onSubmit(f.value)">
            <div class="form-group">
                <label for="skuInput" class="control-label">SKU</label>
                <input type="text"
                       id="skuInput"
                       class="form-control"
                       placeholder="SKU"
                       ngControl="sku">
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
    `
})

export class DemoFormSku {
    onSubmit(form: any): void {
        console.log('you submitted value: ', form);
    }
}

bootstrap(DemoFormSku);