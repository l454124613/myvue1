// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
document.querySelector('body').append(document.createElement('div'))
new Vue({
  template: '<editor v-model="content" lang="python" height="98%" @init="initEditor" theme="github" ></editor>',


  data: {
    content: ''
  },
  components: {
    editor: require('vue2-ace-editor')
  },
  methods: {
    initEditor: function (editor) {
      require('brace/ext/language_tools') //language extension prerequsite...
      require('brace/ext/searchbox')
      // require('brace/mode/html')
      require('brace/mode/python')    //language
      // require('brace/mode/less')
      // require('brace/theme/chrome')
      require('brace/theme/github')
      require('brace/snippets/python') //snippet
require('brace/snippets/text')
      editor.setShowPrintMargin(false)
      // SearchBox() 
      


      editor.setOptions({
        // setShowPrintMargin:false,
        enableSnippets: true,
        enableBasicAutocompletion: true,
        
        enableLiveAutocompletion: true// 设置自动提示
        

      })

    }
  }
}).$mount('div')