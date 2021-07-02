let callbacks = [];
let onClickDocument = (e) => {
  const { target } = e;
  callbacks.forEach((item) => {
    if (item.el === target || item.el.contains(target)) {
      return;
    }
    item.callback();
  });
};
document.addEventListener('click', onClickDocument);

export default {
  bind: function (el, binding) {
    callbacks.push({
      el: el,
      callback: binding.value,
    });
  },
  unbind: function (el) {
    window.removeEventListener("click", onClickDocument);
  }
}
