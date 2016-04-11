import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         FormBuilder, 
         ControlGroup, 
         AbstractControl,
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
    selector: 'demo-form-with-events',
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: Sku with Events</h2>
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
                    [ngFormControl]="sku">
            </div>
            
            <div *ngIf="sku.hasError('required') && sku.dirty" class="panel panel-danger text-danger">SKU is required</div>
            <div *ngIf="sku.hasError('invalidSku') && sku.dirty" class="panel panel-danger text-danger">SKU must begin with <tt>123</tt></div>
            <div *ngIf="!skuForm.valid && skuForm.dirty" class="panel panel-danger text-danger">Form is invalid</div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
   </div>
</div>
    `,
    directives: [CORE_DIRECTIVES, 
                 FORM_DIRECTIVES],
})

export class DemoFormWithEvents {
    skuForm: ControlGroup;
    sku: AbstractControl;
        
    constructor(fb: FormBuilder) {
        this.skuForm = fb.group({
            'sku': ['',
                    Validators.compose([
                        Validators.required,
                        skuValidator
                    ])]
        });
        
        this.sku = this.skuForm.controls['sku'];
        
        // subscribe to events
        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to:', value);
            }
        )
        
        this.skuForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to:', form);
            }
        )
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}