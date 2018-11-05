import ObjectProxy from '@ember/object/proxy';

export default ObjectProxy.extend({
  label: '',
  route: '',

  // Helper, shows nice reference string in Ember Inspector
  toString() {
    return `form-step:${this.get('label')}`;
  }
});
