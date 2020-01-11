<template>
  <div>
    <div v-if="is_ok">
      <el-menu
        :default-active="active_page"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#00142A"
        text-color="#fff"
        active-text-color="#ffd04b"
        id="menu_one"
      >
        <div id="testhome">
          <i class="el-icon-magic-stick"></i>测试平台
          <i class="el-icon-magic-stick"></i>
        </div>
        <el-menu-item index="0">
          <b>首页</b>
        </el-menu-item>
        <!-- <el-menu-item index="1">111</el-menu-item> -->
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">数据库操作</el-menu-item>
          <el-menu-item index="2-2">接口请求</el-menu-item>
          <el-menu-item index="2-3">页面自动化</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">工具盒</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <!-- <el-menu-item index="3" >工具盒</el-menu-item> -->
        <el-menu-item index="5" disabled>消息中心</el-menu-item>
        <el-menu-item index="4" v-if="manager">系统管理</el-menu-item>
        <!-- <el-button type="text">文字按钮</el-button> -->
        <!-- <el-menu-item index="4" disabled style="float:right">name</el-menu-item> -->
        <font style="float: right;margin-top: 13px;" color="#d1faf7" size="3px">
          <b>{{name}}</b>
        </font>
      </el-menu>
      <div style="height:60px"></div>
      <router-view />
    </div>

    <div
      class="error-page"
      type="primary"
      v-loading.fullscreen.lock="fullscreenLoading"
      :class="{noopacity:fullscreenLoading}"
      v-else
      id="login_form"
    >
      <div class="error-code">
        4
        <span>0</span>
        3
      </div>
      <div class="error-desc">啊哦~ 你没有权限访问该页面哦</div>
      <div class="error-handle">
        <el-form
          :model="ruleForm"
          id="login_form"
          status-icon
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="认证密码*" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登录名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :loading="commit_button">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NavMenu",
  data() {
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      fullscreenLoading: true,
      name: "",
      is_ok: false,
      commit_button: false,
      manager: false,
      active_page: "0"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == this.active_page) {
        this.$router.go(0);
      } else {
        this.active_page = key;
        if (key == "0") {
          this.$router.replace("/");
        } else if (key == "2-1") {
          this.$router.replace("/sql");
        }
      }
    },
    submitForm() {
      if (this.ruleForm.pass == "") {
        this.$alert("请输入认证密码！", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.commit_button = true;
        console.log(this.ruleForm);
        // TODO
        this.commit_button = false;
        this.is_ok = true;
        this.name = this.ruleForm.name;
      }
    },

    resetForm() {
      this.ruleForm = {
        pass: "",
        name: ""
      };
    }
  },
  computed: {},
  created: function() {
    setTimeout(() => {
      this.fullscreenLoading = false;
      this.is_ok = true;
      //  var a=window.location.href
      if (this.$route.path == "/sql") {
        this.active_page = "2-1";
      } else if (this.$route.path == "/") {
        this.active_page = "0";
      }

      //  if ()
      //  console.log()
      //  this.$router.push("/workstation")
    }, 100);
  }
};
</script>

<style>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 5%;
}
.error-code {
  line-height: 1;
  font-size: 250px;
  font-weight: bolder;
  color: #f02d2d;
}
.error-code span {
  color: #00a854;
}
.error-desc {
  font-size: 30px;
  color: #777;
}
.error-handle {
  margin-top: 30px;
  padding-bottom: 200px;
}
.error-btn {
  margin-left: 100px;
}

.noopacity {
  opacity: 0;
}
#testhome {
  font-size: 24px;
  color: #fff;
  width: 160px;
  float: left;
  margin-top: 10px;
  margin-left: 25px;
}
#menu_one {
  position: fixed;
  width: 100%;
  font-size: 4px;
  z-index: 99;
}
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
}
</style>