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
          multiple
          :limit="3"
          accept=".xlsx,.jpg,.jpeg,.png,.gif,"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
    // 文件状态改变时的钩子
    fileChange(file, fileList) { //分别为选中的文件,剩余文件列表
      this.form.file = file.raw 
      // this.uploadFile()  只能支持单个上传
    },
    uploadFile() {
      // this.$refs.uploadExcel.submit();  //这种更简单
      let formData = new FormData()
      let data = this.form.file
      formData.append('file', this.form.file)
      this.compressImage(data).then(blob => {
        debugger
          axios({
          method: 'post',
          url: 'https://api.tinify.com/shrink',
          headers: {
            Authorization:'Basic' +  btoa('api' + 'GpjF8kVzfcsq24D8x9bqY0hz5qSjW0hJ')
          },
          data: blob
        })
      })
      
      // axios.post('https://api.tinify.com/shrink',
      //   {data:data},
      //   {headers: {Authorization:'Basic' +  btoa('api' + 'GpjF8kVzfcsq24D8x9bqY0hz5qSjW0hJ')}}
      // )
      // .then(res => {
      //   console.log('res')
      //   console.log(res)
      // })
      // .catch(err => {
      // })
    },


convertBase64UrlToBlob(urlData) {
     var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], {
        type: 'image/jpg'
    });
},
  compressImage(file) {
    var read = new FileReader()
    read.readAsDataURL(file)
    var good = this
    return new Promise(function(resolve, reject){
      read.onload = function(e) {
        var img = new Image()
        img.src = e.target.result
        img.crossOrigin = "*"
        img.onload = function() {
          var that = this
          var w = that.width
          var h = that.height
          var quality = 1 //默认图片质量为0.7
          //生成canvas
          var canvas = document.createElement('canvas')
          var ctx = canvas.getContext('2d')
          //创建属性节点
          var anw =  document.createAttribute('width')
          anw.nodeValue = w
          var anh = document.createAttribute('height')
          anh.nodeValue = h
          canvas.setAttributeNode(anw)
          canvas.setAttributeNode(anh)
          ctx.drawImage(img, 0, 0 ,w, h)
          if(quality && quality <= 1 && quality > 0) {
            quality = quality
          }
          var base64 = canvas.toDataURL('image/*', quality)
          var blob = good.convertBase64UrlToBlob(base64)
          resolve(blob)
        }
      }
    })
  },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log(fileList);
    },
    handlePreview(file) {
      console.log(666);
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>