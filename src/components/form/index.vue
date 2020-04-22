<template>
  <div>
    <KForm ref="loginForm" :model="userInfo" :rules="rules">
      <!-- 用户名 -->
      <KFromItem label="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请输入用户名"></KInput>
      </KFromItem>
      <!-- 密码 -->
       <KFromItem label="密码" prop="password">
        <KInput type="password" v-model="userInfo.password" placeholder="请输入密码"></KInput>
      </KFromItem>
       <!-- 提交按钮 -->
       <KFromItem >
        <button @click="login">登录</button>
      </KFromItem>
    </KForm>
   
  </div>
</template>
<script>
import KInput from './Kinput'
import KFromItem from './KFormItem'
import KForm from './KForm'
export default {
  components: {
    KInput,
    KFromItem,
    KForm
  },
  data() {
    return {
      userInfo: {
        username: "vin",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          alert("submit");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
  }
}
</script>