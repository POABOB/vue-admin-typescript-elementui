<template>
    <div class="login">
        <el-row type="flex" class="row-bg" justify="center" :gutter="20">
            <el-col :xs="20" :sm="10" :md="10" :lg="5">
                <div class="login-container">
                    <el-card>
                        <h2>LOGIN</h2>
                        <el-form
                            status-icon
                            ref="loginForm"
                            :model="loginForm"
                            :rules="loginRules"
                            class="login-form"
                            @submit.native.prevent="handleLogin">
                            <el-form-item prop="account_number">
                                <el-input
                                    type="text"
                                    autocomplete="on"
                                    v-model="loginForm.account_number"
                                    placeholder="Account Number"
                                    prefix-icon="el-icon-user"
                                >
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input
                                    type="password"
                                    autocomplete="off"
                                    v-model="loginForm.password"
                                    placeholder="Password"
                                    prefix-icon="el-icon-lock"
                                    show-password="true"
                                >
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button
                                    :loading="loading"
                                    class="login-button"
                                    type="primary"
                                    native-type="submit"
                                    block
                                >Submit</el-button>
                            </el-form-item>
                        </el-form>
                        <router-link to="/forget">Forget password?</router-link>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

//組件
@Component({
  name: 'Login'
})
export default class extends Vue {
    // data() 
    private loading: boolean = false

    private loginForm: any[string|string] = {
        account_number : '',
        password: ''
    }

    created() {
    }
    // private handleLogin() {
    //     (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
    //         console.log(typeof this.$router)
    //         if (valid) {
    //             this.loading = true
    //             await UserModule.Login({
    //                 ...this.loginForm,
    //                 router: this.$router
    //             })
    //             setTimeout(() => {
    //                 this.loading = false
    //             }, 0.5 * 1000)
    //         } else {
    //             return false
    //         }
    //     })
    // }

    // methods
    private validateAccountNumber = (rule: any, value: string, callback: Function) => {
        if (!value.trim()) {
            callback(new Error('Please enter the correct Account Number'))
        } else {
            callback()
        }
    }

    private validatePassword = (rule: any, value: string, callback: Function) => {
        if (value.length < 3) {
            callback(new Error('The password can not be less than 3 digits'))
        } else {
            callback()
        }
    }

    private loginRules = {
        account_number: [{ validator: this.validateAccountNumber, trigger: 'blur' }],
        password: [{ validator: this.validatePassword, trigger: 'blur' }]
    }
}
</script>

<style lang="scss" scoped>
.login {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: #e2e8f0;
}

.login-container {
    margin: 10rem 0 0 0;

    .login-form {

        .login-button {
            width: 100%;
            margin-top: .5rem;
        }

        .el-input__prefix {
            // background: rgb(238, 237, 234);
            background: black;
            left: 0;
            height: calc(100% - 2px);
            left: 1px;
            top: 1px;
            border-radius: 3px;
            .el-input__icon {
                width: 30px;
            }
        }
    }
}
</style>
<style lang="scss">
.login {
    h2 {
    font-family: "Open Sans";
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    padding-bottom: 20px;
    }
}
a {
  color: #909399;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten(#909399, 7);
  }
}
</style>