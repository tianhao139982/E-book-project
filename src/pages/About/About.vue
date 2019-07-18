<template>
    <div class="container">
        <br/>
        <br/>
            <h6>
                <img class="img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
             用户资料
            </h6>
        <hr>
        <div class="outter">
        <el-form 
            :model="ruleForm" 
            :rules="rules" 
            ref="ruleForm" 
            label-width="100px" 
            class="demo-ruleForm">
                <el-form-item label="用户账号" prop="date2">
                    <el-input v-model="ruleForm.name" :disabled="flag"></el-input>
                </el-form-item>
                <el-form-item label="用户名称" prop="name">
                    <el-input v-model="ruleForm.name" :disabled="flag"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="region">
                    <el-input v-model="ruleForm.region" :disabled="flag"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="date1">
                    <el-input v-model="ruleForm.region" :disabled="flag"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
                    <el-button type="primary" @click="editForm('ruleForm')">编辑</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
        </el-form>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        flag:true,
        rules: {
            name: [
                { required: true, message: '用户名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
                { required: true, message: '用户密码', trigger: 'change' }
            ],
            date1: [
                { type: 'date', required: true, message: '请输入邮箱', trigger: 'change' }
            ],
            date2: [
                { type: 'date', required: true, message: '请输入账号名称', trigger: 'change' }
            ],
            type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      editForm(formName) {
        this.flag = false;
      }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    },
  }
</script>


<style scoped>
.outter{
    width:50%;
    margin-left:15%;
    margin-top:3%;
}
.img{
    width:40px;
    height:40px;
    border-radius: 20px;
    border:1px solid #d9d9d9;
    margin-right: 20px;
}
</style>
