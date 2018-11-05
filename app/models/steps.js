import ArrayProxy from '@ember/array/proxy';
import { computed } from '@ember/object';

import FormStep from './form-step';

export const FORM_STEPS = [
  FormStep.create({ label: 'Details', route: 'form.details' }),
  FormStep.create({ label: 'Last Question', route: 'form.last-question' }),
  FormStep.create({ label: 'Confirm', route: 'form.confirm' }),
  FormStep.create({ label: 'Done', route: 'form.done' })
];

export default ArrayProxy.extend({
  indexOfActiveRoute: 0,

  activeStep: computed("indexOfActiveRoute", "content.[]", function() {
    return this.get('content').objectAt(this.get('indexOfActiveRoute'));
  }),

  toString() {
    return 'form-steps';
  }
});
