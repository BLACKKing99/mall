<template>
  <div>
    <div class="info-header">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <div class="name">{{ commentInfo.user.uname }}</div>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ showDate}}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default(){
        return {}
      }
    },
  },
  computed: {
    showDate(){
      const date = new Date(this.commentInfo.created * 1000)
      let year = date.getFullYear()
      let mouse = date.getMonth()+1
      let day = date.getDay()
      return `${year}年${mouse}月${day}日`
    }
  },
};
</script>

<style scoped>
.info-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: black;
  padding: 15px 10px;
  border-bottom: solid #ddd 0.5px;
}
.info-user {
  display: flex;
  justify-content: left;
  padding: 20px;
}
.info-user img {
  height: 60px;
  width: 60px;
  border: solid 1px #fff;
  border-radius: 50%;
}
.name {
  line-height: 4em;
  color: black;
  margin-left: 5px;
}
.info-comment {
  padding: 10px 15px;
}
.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>