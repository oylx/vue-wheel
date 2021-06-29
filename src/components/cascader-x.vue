<script>
export default {
  name: 'cascader-x',
  props: {
    sourceItem: {
      type: Array,
    },
  },
  render(h) {
    const data = this.sourceItem;
    const arr = []
    const fn = (data) => {
      data.forEach(({
        name,
        children,
      }) => {
        if (children) {
          fn(children);
        } else {
          arr.push(name);
        }
      });
      return arr
    };
    const res = fn(data);
    console.log(res);
    return h('div', {
      class: 'cascaderItem'
    }, 'hi');
  },
};
</script>

<style scoped>
.cascaderItem{
  border: 1px solid #ff0000;
  margin: 10px;
}
</style>
