import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         FormBuilder, 
         ControlGroup, 
         AbstractControl, 
         Validators } from 'angular2/common';

@Component({
    selector: 'demo-form-with-validations-explicit',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: Sku with Validations (explicit)</h2>
    </div>
    <div class="panel-body">
        <form [ngFormModel]="skuForm" 
            (ngSubmit)="onSubmit(skuForm.value)">
            
            <div class="form-group" [class.has-error]="!sku.valid && sku.dirty">
                <label for="skuInput" class="control-label">SKU</label>
                <input type="text" 
                    id="skuInput"
                    class="form-control"
                    placeholder="SKU"
                    [ngFormControl]="sku">
            </div>

            <div *ngIf="!sku.valid && sku.dirty" class="panel panel-danger text-danger">SKU is invalid</div>
            <div *ngIf="sku.hasError('required') && sku.dirty" class="panel panel-danger text-danger">SKU is required</div>
            <div *ngIf="!skuForm.valid && skuForm.dirty" class="panel panel-danger text-danger">Form is invalid</div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
    `
})

export class DemoFormWithValidationsExplicit {
    skuForm: ControlGroup;
    sku: AbstractControl;
        
    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['', Validators.required]
        });
        
        this.sku = this.skuForm.controls['sku'];
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}