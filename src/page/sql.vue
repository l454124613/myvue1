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

      <el-dialog title="数据库配置" :visible.sync="dialogFormVisible" :before-close="show">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :label-position="'left'">
          <el-form-item label="连接名称">
            <el-input v-model="formInline.name" class="inp" placeholder="连接名称"></el-input>
          </el-form-item>
          <el-form-item label="连接类型">
            <el-select v-model="formInline.region" placeholder="数据库类型">
              <el-option label="Mysql" value="mysql"></el-option>
              <el-option label="Sqlserver" value="sqlserver"></el-option>
              <el-option label="Sqlite" value="sqlite"></el-option>
              <el-option label="Mongodb" value="mongodb"></el-option>
              <el-option label="Redis" value="redis"></el-option>

            </el-select>
            
          </el-form-item>
          <br>
          <el-form-item label="连接地址">
            <el-input v-model="formInline.ip" class="inp" placeholder="ip地址"></el-input>
          </el-form-item>
          <el-form-item label="连接端口">
            <el-input v-model="formInline.port" class="inp" placeholder="端口"></el-input>
          </el-form-item>
          <el-form-item label="登录名称">
            <el-input v-model="formInline.user" class="inp" placeholder="登录名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="formInline.passwd" class="inp" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="数据库名">
            <el-input v-model="formInline.db" class="inp" placeholder="数据库"></el-input>
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="success" @click="onSubmit">连接测试</el-button>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
           <el-button type="success" @click="dialogFormVisible = false">测试</el-button> 
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
      formInline: {
        name: "",
        region: "",
        ip:"",
        port:"",
        user:"",
        passwd:"",
        db:""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(event);
    },show(a){alert(a)},
    onSubmit() {
      console.log("submit!");
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
.inp{
width: 193px
}
</style>