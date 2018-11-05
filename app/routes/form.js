import Route from '@ember/routing/route';

import Steps, { FORM_STEPS } from '../models/steps';

export default Route.extend({

  model() {
    return Steps.create({content: FORM_STEPS});
  }
});
