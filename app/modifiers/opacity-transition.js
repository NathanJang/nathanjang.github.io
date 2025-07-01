import { modifier } from 'ember-modifier';

function opacityTransition(element, [callback]) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => callback(entry.isIntersecting));
  });
  observer.observe(this.element);

  return () => {
    observer.disconnect();
  };
}

export default modifier(opacityTransition);
