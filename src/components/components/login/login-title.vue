<template>
  <div class="login-title">
    <van-divider :style="{ color: '#999', borderColor: '#1989fa', padding: '0 16px' }">{{title}}</van-divider>
    <van-form>
      <!--手机短信验证的手机号-->
      <div v-show="manner">
        <input v-model="phone" placeholder="请输入手机号" />
      </div>
      <!-- 账号登录的账号 -->
      <div v-show="!manner">
        <input v-model="logName" placeholder="请输入已注册的手机/邮箱/用户名" />
      </div>
      <!-- 手机短信验证的验证码 -->
      <div class="verification" v-show="manner">
        <input v-model="verificationCode" placeholder="请输入验证码" />
        <van-button round plain type="primary" @click="onVerificationCode">{{show?time:'验证'}}</van-button>
      </div>
      <!-- 账号登录的密码 -->
      <div v-show="!manner">
        <input type="password" v-model="logPawss" placeholder="请输入密码" />
      </div>
      <!-- 注册账号的设置密码 -->
      <div v-show="!regClause">
        <input type="password" v-model="regPawss" placeholder="6-16位登录密码" />
      </div>
      <!-- 切换登录的方式 --->
      <div class="clause" v-show="regClause">
        <p @click="onSwitchingMode">{{manner?'使用聚美帐号登录':'使用手机短信验证码登录'}}</p>
        <p>30天内自动登录</p>
      </div>
      <div :class="this.regClause?'bottom':'bottom-ancter'">
        <van-button round block color="#feb2c5" type="info" @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
// import { Login } from "../../../api/serve/login";
import { regs, login } from "../../../api/serve/login/index";
import { setcookie } from "../../../api/common";
import md5 from "../../../api/md5/index";
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
export default {
  props: {
    title: {
      type: [String],
      default() {
        return "";
      }
    },
    regClause: {
      type: [Boolean],
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      phone: "", //手机号码
      verificationCode: "", //验证码
      regPawss: "", //注册密码
      logPawss: "", //账号登录密码
      logName: "", //账号登录
      time: 90, //验证时间
      show: false, //是否正在验证 （false：否 ，true：是）
      manner: true //登录方式（true：手机验证，false：密码）
    };
  },
  methods: {
    //提交数据
    onSubmit() {
      this.manner ? this.toShortMessage() : this.toAccountNumber();
    },
    //手机短信登录的验证 && 注册账号的验证
    toShortMessage() {
      let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      let reg2 = /^\w{6,16}$/;
      if (this.phone.trim()) {
        if (reg.test(this.phone)) {
          //验证码校验
          if (this.verificationCode.trim()) {
            //注册密码校验
            if (!this.regClause) {
              if (!this.regPawss.trim()) {
                this.toPopUpWindows("请设置密码");
              } else if (!reg2.test(this.regPawss)) {
                this.toPopUpWindows("密码格式不正确,请重新输入");
              } else {
                //注册账号
                this.toRegs();
              }
            } else {
              //手机短信登录
              this.toPhoneLogin();
            }
          } else {
            this.toPopUpWindows("请输入验证码");
          }
        } else {
          this.toPopUpWindows(" 您输入的手机号码格式有误，需为 11 位数字格式 ");
        }
      } else {
        this.toPopUpWindows("请输入 11 位手机号码 ");
      }
    },
    //手机注册
    async toRegs() {
      let obj = {
        name: this.phone,
        pass: md5(this.regPawss)
      };
      let res = await regs(obj).then();
      try {
        if (res.code == 0) {
          this.$router.push({ path: "/Login" });
        } else {
          this.toPopUpWindows(res.msg);
        }
      } catch (error) {
        window.console.log(error);
      }
    },
    //手机短信登录
    toPhoneLogin() {
      let obj = {
        name: this.phone,
        pass: this.verificationCode
      };
      window.console.log(obj);
      // Login(obj).then(data => {
      //   window.console.log(data);
      // });
    },
    //账号登录验证
    toAccountNumber() {
      let reg2 = /^\w{6,16}$/;
      if (this.logName.trim()) {
        if (this.logPawss.trim()) {
          if (!reg2.test(this.logPawss)) {
            this.toPopUpWindows("密码格式不正确");
          } else {
            this.toLogin();
          }
        } else {
          this.toPopUpWindows("请输入密码");
        }
      } else {
        this.toPopUpWindows("请输入用户名");
      }
    },
    toPopUpWindows(val) {
      Dialog.alert({
        message: val
      }).then(() => {
        // on close
      });
    },
    //登录接口
    async toLogin() {
      let obj = {
        name: this.logName,
        pass: md5(this.logPawss)
      };
      let res = await login(obj).then();
      try {
        if (res.code == 0) {
          this.$router.push({ path: "/manage/myMessage" });
          setcookie("token", res.token);
          setcookie("userId", res.userId);
        } else {
          this.toPopUpWindows(res.msg);
        }
      } catch (error) {
        window.console.log(error);
      }
    },
    //获取验证码
    onVerificationCode() {
      this.show ? null : this.toCountDown();
    },
    //倒计时
    toCountDown() {
      this.show = true;
      let res = setInterval(() => {
        this.time = this.time - 1;
        if (this.time == 0) {
          this.time = 90;
          this.show = false;
          clearInterval(res);
        }
      }, 1000);
    },
    //切换登录方式
    onSwitchingMode() {
      this.manner = !this.manner;
    }
  }
};
</script>
<style lang="scss">
.login-title {
  padding: 0 12%;
  .van-divider {
    border-color: #999 !important;
  }
  .van-form {
    input {
      height: 36px;
      width: 100%;
      border: none;
      background-color: #f5f5f5;
      border-radius: 20px;
      text-indent: 20px;
      color: #999;
    }
    input:nth-child(1) {
      margin-bottom: 18px;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers 适配谷歌 */
      color: #ccc;
    }
    .verification {
      input {
        width: 65%;
      }
      button {
        width: 30%;
        height: 36px;
        line-height: 36px;
        margin-left: 5%;
        color: #feb2c5;
        border: 1px solid #feb2c5;
      }
    }
    .clause {
      display: flex;
      font-size: 12px;
      height: 12px;
      align-items: center;
      justify-content: space-between;
      p:nth-child(1) {
        color: #fe4070;
        padding-left: 7px;
      }
      p:nth-child(2) {
        color: #999999;
        padding-right: 7px;
      }
    }
    .bottom {
      height: 36px;
      padding-top: 18px;
      color: #fff;
    }
    .bottom-ancter {
      height: 36px;
      color: #fff;
    }
  }
}
</style>