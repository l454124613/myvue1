<template>
  <div id="card_div">

    
    <h1 style="
    margin-left: 20px;margin-top: 0;
">项目</h1>
    <el-divider></el-divider>
<el-row>
  <el-col :xs="22" :sm="11" :md="11" :lg="8" :xl="8" v-for="o in 20" :key="o"  >
    <el-card class="box-card" shadow="hover" @dblclick.native="show(o)">
      <div slot="header" class="clearfix"   >
        <span >
          <b>
            <!-- title -->{{o}}
            </b>
        </span>
        <el-button
          style="float: right; padding: 3px 0;font-size:20px;color:red"
          type="text "
          :plain="true"
         @click.stop="show('del')"
        >
          <i class="el-icon-delete"  ></i>
        </el-button>
      </div>
      <div class="item" @click="show('3')">
        <!-- con -->{{o}}
      </div>
    </el-card>
      </el-col>
</el-row>
  </div>
</template>


<script>
export default {
  name: "dashboard",
  data() {
    return {};
  },
  methods: {
    show:function(a){
      alert(a)
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.box-card {
  width: 400px;
  height: 200px;

  margin: 8px;
}
#card_div {
  max-width: 1400px;
  margin: auto;
}

</style>