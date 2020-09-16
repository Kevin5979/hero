<template>
  <div>
    <h2>文章列表</h2>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/essay/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "EssayList",
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      console.log("re")
      const res = await this.$http.get("rest/essays");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定删除文章 "${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const res = await this.$http.delete(`rest/essays/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        })
        .catch(mess => {
          console.log(mess);
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
