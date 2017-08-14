import Ember from 'ember';

export function isLastArrayIndex(params/*, hash*/) {
  return params[0] === params[1].length - 1;
}

export default Ember.Helper.helper(isLastArrayIndex);
