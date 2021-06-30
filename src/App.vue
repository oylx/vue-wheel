<template>
  <div style="padding: 20px;">
    <cascader :source="source" popover-height="200px" :selected.sync="selected"></cascader>
  </div>
</template>

<script>
import Cascader from '@/components/cascader';
import db from '@/components/db';

function ajax1(parentId = 0, success, fail) {
  let id = setTimeout(() => {
    let result = db.filter((item) => item.parent_id == parentId);
    success(result);
  }, 0);
  return id;
}

function ajax2(parentId = 0) {
  return new Promise((resolve, fail) => {
    let result = db.filter((item) => item.parent_id == parentId);
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
    // ajax1(0, (res) => {
    //   this.source = res;
    // });
    ajax2().then(res => {
      this.source = res;
    });
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
