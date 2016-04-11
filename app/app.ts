import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

/* 
 * Form Demos
 */
import { DemoFormSku } from './forms/demo-form-sku';
import { DemoFormSkuBuilder } from './forms/demo-form-sku-with-builder';
import { DemoFormWithValidationsExplicit } from './forms/demo-form-with-validations-explicit';
import { DemoFormWithValidationsShorthand } from './forms/demo-form-with-validations-shorthand';
import { DemoFormWithCustomValidations } from './forms/demo-form-with-custom-validations';
import { DemoFormWithEvents } from './forms/demo-form-with-events';
import { DemoFormNgModel } from './forms/demo-form-ng-model';

@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku,
               DemoFormSkuBuilder,
               DemoFormWithValidationsExplicit,
               DemoFormWithValidationsShorthand,
               DemoFormWithCustomValidations,
               DemoFormWithEvents,
               DemoFormNgModel],
  template: `
<div>
  <demo-form-ng-model></demo-form-ng-model>
  <demo-form-with-events></demo-form-with-events>
  <demo-form-with-custom-validations></demo-form-with-custom-validations>
  <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
  <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
  <demo-form-sku-builder></demo-form-sku-builder>
  <demo-form-sku></demo-form-sku>
</div>
  `
})

class FormsDemoApp {
}

bootstrap(FormsDemoApp);
