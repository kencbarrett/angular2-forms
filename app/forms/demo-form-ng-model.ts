import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         FormBuilder, 
         ControlGroup, 
         Validators } from 'angular2/common';

@Component({
    selector: 'demo-form-ng-model',
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
        <h2>Demo Form: NgModel</h2>
    </div>
    <div class="panel-body">
        <div class="panel panel-info">
            <div class="panel-heading">The product name you entered is:  {{productName}}</div>
            <!--<div>{{productName}}</div>-->
        </div>
    
        <form [ngFormModel]="theForm" 
            (ngSubmit)="onSubmit(theForm.value)">
            
            <div class="form-group">
                <label for="productNameInput" class="control-label">Product Name</label>
                <input type="text" id="productNameInput" class="form-control"
                    placeholder="Product Name"
                    [ngFormControl]="theForm.find('productName')"
                    [(ngModel)]="productName">
            </div>
            
            <div *ngIf="!theForm.valid && theForm.dirty" class="panel panel-danger text-danger">The form is invalid</div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    <!--
        <form [ngFormModel]="theForm"
              (ngSubmit)="onSubmit(theForm.value)">

        <div class="form-group">
            <label for="productNameInput">Product Name</label>
            <input type="text"
                id="productNameInput"
                placeholder="Product Name"
                [ngFormControl]="theForm.find('productName')"
                [(ngModel)]="productName">
        </div>

            <div *ngIf="!myForm.valid" class="ui error message">Form is invalid</div>
            <button type="submit" class="ui button">Submit</button>
        </form>
        -->
   </div>
</div>
    `,
    directives: [CORE_DIRECTIVES, 
                 FORM_DIRECTIVES],
})

export class DemoFormNgModel {
    theForm: ControlGroup;
    productName: string;
        
    constructor(fb: FormBuilder) {
        this.theForm = fb.group({
            'productName': ['', Validators.required]
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}