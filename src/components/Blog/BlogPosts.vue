<template>
    <div class="post-box">
        <span class="post-views">{{views}}</span>
        <h3 class="post-title">{{title | reversing}}</h3>
        <span class="post-date">{{date}}</span>
        <p class="post-content">{{content | shorten(30, '...')}}</p>
        <div class="row">
            <div class="col-md-6">
                <span class="post-author">
                    {{author}}
                </span>
            </div>
            <div class="col-md-6">
                <span class="post-category"> {{category | uperCase}}</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlogPosts',
    props: ["title", "date", "author", "content", "views", "category"]
}
</script>
<style lang="scss" scoped>
  .post-box{
      padding: 30px;
      background-color: #fff;
      box-shadow: 0 0 10px #DDD;
      position: relative;
      text-align: left;
  }
  .post-views{
      position: absolute;
      top: 5px;
      right: 5px;
      background-color: #4caf50;
      border-radius: 4px;
      padding: 1px 5px;
      color: #fff;
      font-weight: bold;
      text-align: center;
  }
  .post-title{
      color: #818080;
  }
  .post-date{
      display: block;
      padding: 0 0 5px;
      color: #888;
      font-size: 14px;
  }
  .post-content{
      line-height: 1.8;
      color: #666;
  }
  .post-author{
      background-color: #660077;
      padding: 5px 10px;
      border-radius: 4px;
      color: #fff;
  }
  .post-category{
      background-color: #b111ce;
      padding: 5px 10px;
      border-radius: 4px;
      color: #fff;
       bottom: 5px;
      right: 5px;
      float: right;
  } 
</style>