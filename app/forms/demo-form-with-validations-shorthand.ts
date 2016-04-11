import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         FormBuilder, 
         ControlGroup, 
         Validators } from 'angular2/common';

@Component({
    selector: 'demo-form-with-validations-shorthand',
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: Sku with Validations (shorthand)</h2>
    </div>
    <div class="panel-body">
        <form [ngFormModel]="skuForm" 
            (ngSubmit)="onSubmit(skuForm.value)">
            
            <div class="form-group" [class.has-error]="!skuForm.find('sku').valid && skuForm.find('sku').dirty">
                <label for="skuInput" class="control-label">SKU</label>
                <input type="text" 
                    id="skuInput"
                    class="form-control"
                    placeholder="SKU"
                    #sku="ngForm"
                    [ngFormControl]="skuForm.controls['sku']">
            </div>
            
            <div *ngIf="!sku.control.valid && sku.control.dirty" class="panel panel-danger text-danger">SKU is invalid</div>
            <div *ngIf="sku.control.hasError('required') && sku.control.dirty" class="panel panel-danger text-danger">SKU is required</div>
            <div *ngIf="!skuForm.valid && skuForm.dirty" class="panel panel-danger text-danger">Form is invalid</div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</div>
    `,
    directives: [CORE_DIRECTIVES, 
                 FORM_DIRECTIVES],
})

export class DemoFormWithValidationsShorthand {
    skuForm: ControlGroup;
        
    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['', Validators.required]
        });

    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}