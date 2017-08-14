import Ember from 'ember';

export function isLastArrayIndex(params) {
  return params[0] === params[1].length - 1 && params[1].length % 2 !== 0;
}

export default Ember.Helper.helper(isLastArrayIndex);
