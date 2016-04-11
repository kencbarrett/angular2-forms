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
    var DemoFormWithValidationsExplicit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormWithValidationsExplicit = (function () {
                function DemoFormWithValidationsExplicit(fb) {
                    this.skuForm = fb.group({
                        'sku': ['', common_1.Validators.required]
                    });
                    this.sku = this.skuForm.controls['sku'];
                }
                DemoFormWithValidationsExplicit.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormWithValidationsExplicit = __decorate([
                    core_1.Component({
                        selector: 'demo-form-with-validations-explicit',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h2>Demo Form: Sku with Validations (explicit)</h2>\n    </div>\n    <div class=\"panel-body\">\n        <form [ngFormModel]=\"skuForm\" \n            (ngSubmit)=\"onSubmit(skuForm.value)\">\n            \n            <div class=\"form-group\" [class.has-error]=\"!sku.valid && sku.dirty\">\n                <label for=\"skuInput\" class=\"control-label\">SKU</label>\n                <input type=\"text\" \n                    id=\"skuInput\"\n                    class=\"form-control\"\n                    placeholder=\"SKU\"\n                    [ngFormControl]=\"sku\">\n            </div>\n\n            <div *ngIf=\"!sku.valid && sku.dirty\" class=\"panel panel-danger text-danger\">SKU is invalid</div>\n            <div *ngIf=\"sku.hasError('required') && sku.dirty\" class=\"panel panel-danger text-danger\">SKU is required</div>\n            <div *ngIf=\"!skuForm.valid && skuForm.dirty\" class=\"panel panel-danger text-danger\">Form is invalid</div>\n\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n    </div>\n  </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormWithValidationsExplicit);
                return DemoFormWithValidationsExplicit;
            })();
            exports_1("DemoFormWithValidationsExplicit", DemoFormWithValidationsExplicit);
        }
    }
});
//# sourceMappingURL=demo-form-with-validations-explicit.js.map