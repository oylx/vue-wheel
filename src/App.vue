<template>
  <div>
    <p>{{ selected && selected[0] && selected[0].name || '空'}}</p>
    <p>{{ selected && selected[1] && selected[1].name || '空'}}</p>
    <p>{{ selected && selected[2] && selected[2].name || '空'}}</p>
    <div style="padding: 20px;">
      <cascader :source="source" popover-height="200px" :selected.sync="selected" @update:selected="xxx"></cascader>
    </div>
  </div>
</template>

<script>
import Cascader from '@/components/cascader';
import db from '@/components/db';

function ajax(parentId = 0, success, fail) {
  setTimeout(() => {
    let result = db.filter((item) => item.parent_id === parentId);
    success(result);
  }, 0);
}

function ajax2(parentId = 0) {
  return new Promise((resolve, fail) => {
    let result = db.filter((item) => item.parent_id === parentId);
    resolve(result);
  });
}

export default {
  name: 'App',
  components: {
    Cascader,
  },
  data() {
    return {
      selected: [],
      source: [],
    };
  },
  created() {
    ajax2().then(res => {
      this.source = res;
    });
  },
  methods: {
    xxx() {
      ajax2(this.selected[0].id).then(res => {
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0];
        this.$set(lastLevelSelected, 'children', res);
        console.log(this.source);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
