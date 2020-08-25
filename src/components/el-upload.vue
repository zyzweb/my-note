<template>
  <div>
    <el-form :model="form">
      <el-form-item label="上传文件" label-width="120">
        <el-upload
          ref="uploadExcel"
          class="upload-demo"
          action="http://hn216.api.yesapi.cn/?s=App.CDN.UploadImg&app_key=B10D009A3C9EBA28867900ACA5B24C89&sign=4DD773E5166F4DDEB4B9F269B172BDC9"
          :on-preview="handlePreview"
          :on-change="fileChange"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :auto-upload="false"
          :http-request="getFile"
          multiple
          :limit="3"
          accept=".xlsx,.jpg,.jpeg,.png,.gif,"
          :on-exceed="handleExceed"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip"  class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>
        <el-button size="small">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      form: {
        file: []
      }
    };
  },
  methods: {
    getFile(item) {
      console.log('item');
      this.form.file = item
    },
    // 文件状态改变时的钩子
    fileChange(file, fileList) { //分别为选中的文件,剩余文件列表
      // this.form.file = file.raw 
      // this.uploadFile()  //只能支持单个上传
    },
    uploadFile() {
      // this.$refs.uploadExcel.submit();  //这种更简单
      let formData = new FormData()
      formData.append('file', this.form.file)
      axios.post('http://hn216.api.yesapi.cn/?s=App.CDN.UploadImg&app_key=B10D009A3C9EBA28867900ACA5B24C89&sign=4DD773E5166F4DDEB4B9F269B172BDC9',
        formData,
        { "Content-Type": "multipart/form-data" }
      )
      .then(res => {
        console.log('res')
        console.log(res)
      })
    },
    handlePreview(file) { //点击文件列表中已上传的文件时的钩子
      console.log(666);
      console.log(file);
    },
    handleExceed(files, fileList) {//文件超出个数限制时的钩子
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    }
  }
};
</script>