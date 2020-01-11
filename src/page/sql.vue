<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
    id="tabs"
    type="card"
    @tab-remove="removeTab"
  >
    <el-tab-pane label="数据库配置" name="first" :closable="false">
      <el-button size="small" @click="dialogFormVisible = true">添加数据库</el-button>
      

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
      <el-button size="small" @click="removeAllTab()">remove all tab</el-button>
    </el-tab-pane>
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="true"
    >{{item.content}}</el-tab-pane>
    <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane> -->
    <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
    <!-- <el-tab-pane label="查询历史" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>


<script>
export default {
  name: "sql",
  data() {
    return {
      activeName: "first",
      editableTabsValue: "0",
      editableTabs: [],
      tabIndex: 0,
      dialogFormVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(event);
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "NewTab" + newTabName,
        name: newTabName,
        content: "New Tab content"
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    removeAllTab() {
      (this.editableTabsValue = "0"),
        (this.editableTabs = []),
        (this.tabIndex = 0);
    }
  }
};
</script>

<style>
#tabs {
  margin-left: 8px;
  margin-right: 8px;
}
</style>