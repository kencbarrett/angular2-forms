System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DemoFormNgModel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormNgModel = (function () {
                function DemoFormNgModel(fb) {
                    this.theForm = fb.group({
                        'productName': ['', common_1.Validators.required]
                    });
                }
                DemoFormNgModel.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormNgModel = __decorate([
                    core_1.Component({
                        selector: 'demo-form-ng-model',
                        template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h2>Demo Form: NgModel</h2>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">The product name you entered is:  {{productName}}</div>\n            <!--<div>{{productName}}</div>-->\n        </div>\n    \n        <form [ngFormModel]=\"theForm\" \n            (ngSubmit)=\"onSubmit(theForm.value)\">\n            \n            <div class=\"form-group\">\n                <label for=\"productNameInput\" class=\"control-label\">Product Name</label>\n                <input type=\"text\" id=\"productNameInput\" class=\"form-control\"\n                    placeholder=\"Product Name\"\n                    [ngFormControl]=\"theForm.find('productName')\"\n                    [(ngModel)]=\"productName\">\n            </div>\n            \n            <div *ngIf=\"!theForm.valid && theForm.dirty\" class=\"panel panel-danger text-danger\">The form is invalid</div>\n\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n    <!--\n        <form [ngFormModel]=\"theForm\"\n              (ngSubmit)=\"onSubmit(theForm.value)\">\n\n        <div class=\"form-group\">\n            <label for=\"productNameInput\">Product Name</label>\n            <input type=\"text\"\n                id=\"productNameInput\"\n                placeholder=\"Product Name\"\n                [ngFormControl]=\"theForm.find('productName')\"\n                [(ngModel)]=\"productName\">\n        </div>\n\n            <div *ngIf=\"!myForm.valid\" class=\"ui error message\">Form is invalid</div>\n            <button type=\"submit\" class=\"ui button\">Submit</button>\n        </form>\n        -->\n   </div>\n</div>\n    ",
                        directives: [common_1.CORE_DIRECTIVES,
                            common_1.FORM_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormNgModel);
                return DemoFormNgModel;
            })();
            exports_1("DemoFormNgModel", DemoFormNgModel);
        }
    }
});
//# sourceMappingURL=demo-form-ng-model.js.map