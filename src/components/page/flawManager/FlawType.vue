<template>
 <!--缺陷类型-->
 <div>
  <el-row>
   <el-form ref="form" :model="form">
    <el-button  type="primary" class="but el-icon-circle-plus-outline" @click="dialogVisible=true">添加缺陷类型</el-button>
    <el-dialog
            title="添加缺陷类型"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
     <el-form-item label="缺陷类型名称:">
      <el-input v-model="from.name"></el-input>
     </el-form-item>
     <el-form-item label="启用状态:">
      <el-radio-group v-model="from.resource">
       <el-radio label="启用"></el-radio>
       <el-radio label="不启用"></el-radio>
      </el-radio-group>
     </el-form-item>

     <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
   </el-form>
  </el-row>
  <el-row class="row1">
   <el-table border strip :data="rows">
    <el-table-column prop="title" label="缺陷类型名称"></el-table-column>
    <el-table-column align="center" label="状态(启用/未启用)"></el-table-column>
    <el-table-column prop="" label="操作"></el-table-column>
   </el-table>
   <div class="page">
    <el-pagination background small layout="sizes,prev,next,pager,jumper,slot" :page-sizes="[2,5,8,10]" @current-change="handleCurrentChange"
                   @size-change="handleSizeChange" :page-size="pageSize" :total="total" :current-page="currentPage">

    </el-pagination>
   </div>
  </el-row>
 </div>
</template>

<script>
    export default {
        name: 'FlawManager',
        data(){
            return{
             dialogVisible: false,
             from:{
              name:'',
              resource:'启用',
              total:0,//总页数
              pageSize:2,//每页显示的条数
              currentPage:1,//当前页
              rows:[]//当前实现的记录信息
             }
            }
        },
     methods:{
      show:function(page,pageSize){
       console.log("进入")
       this.axios.get('http://localhost:10086/queryPages?pageNo='+page+'&pageSize='+pageSize).then(res=>{
        console.log("返回："+res.data)
        if(res.data.data){
         this.rows=res.data.data;
         this.total=res.data.totalRecords;
         this.currentPage=res.data.pageNo;
         this.pageSize=res.data.pageSize;
        }

       });
      },
      handleCurrentChange:function(val){
       this.currentPage=val;
       this.show(this.currentPage,this.pageSize);
      },
      handleSizeChange:function(val){
       this.pageSize=val;
       this.currentPage=1;
       this.show(this.currentPage,this.pageSize);
      }
     },
     mounted() {
      this.show(this.currentPage,this.pageSize);
     }
    }
</script>

<style scoped>
   .but{
      margin-top: 50px;
      margin-left: 50px;
   }
 .row1{
  margin-top: 50px;
  margin-left: 50px;
 }
   .page{
    margin-top: 10px;
    width: 500px;
    float: right;
   }
</style>
