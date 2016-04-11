import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         FormBuilder, 
         ControlGroup, 
         Control,
         Validators } from 'angular2/common';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: Control): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
    selector: 'demo-form-with-custom-validations',
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: Sku with Custom Validations</h2>
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
            
            <div *ngIf="sku.control.hasError('required') && sku.control.dirty" class="panel panel-danger text-danger">SKU is required</div>
            <div *ngIf="sku.control.hasError('invalidSku') && sku.control.dirty" class="panel panel-danger text-danger">SKU must begin with <tt>123</tt></div>
            <div *ngIf="!skuForm.valid && skuForm.dirty" class="panel panel-danger text-danger">Form is invalid</div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</div>
    `,
    directives: [CORE_DIRECTIVES, 
                 FORM_DIRECTIVES],
})

export class DemoFormWithCustomValidations {
    skuForm: ControlGroup;
        
    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['',
                    Validators.compose([
                        Validators.required,
                        skuValidator
                    ])]
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}