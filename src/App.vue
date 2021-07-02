<template>
  <div>
    <p>{{ selected && selected[0] && selected[0].name || '空' }}</p>
    <p>{{ selected && selected[1] && selected[1].name || '空' }}</p>
    <p>{{ selected && selected[2] && selected[2].name || '空' }}</p>
    <div style="padding: 20px;">
      <cascader :source.sync="source" popover-height="200px"
                @update:source="onUpdateSource"
                @update:selected="onUpdateSelected"
                :selected.sync="selected" :load-data="loadData"></cascader>
    </div>
  </div>
</template>

<script>
import Cascader from '@/components/cascader';
import db from '@/components/db';

function ajax(parentId = 0) {
  return new Promise((resolve, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId);
      result.forEach(node => {
        node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
      });
      resolve(result);
    }, 300);
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
    ajax(0).then(res => {
      this.source = res;
    });
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result); // 回调:把别人传给我的函数调用一下
      });
    },
    onUpdateSource() {
    },
    onUpdateSelected() {
    },
  },
};
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
img {max-width: 100%;}
html {
  --font-size: 14px;
}
body {
  font-size: var(--font-size);
}
</style>
