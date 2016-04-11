import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'demo-form-sku-builder',
    directives: [FORM_DIRECTIVES],
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: Sku with Builder</h2>
    </div>
    <div class="panel-body">
        <form [ngFormModel]="skuForm" 
            (ngSubmit)="onSubmit(skuForm.value)">

            <div class="form-group">
                <label for="skuInput" class="control-label">SKU</label>
                <input type="text" 
                    id="skuInput"
                    class="form-control"
                    [ngFormControl]="skuForm.controls['sku']">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
     </div>
 </div>
    `
})

export class DemoFormSkuBuilder {
    skuForm: ControlGroup;
        
    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['ABC123']
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}