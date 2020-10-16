<template>
  <div class="help">
    <h1>Blog</h1>
    <p>
      lorem ipsom help vue lorem ipsom help vue lorem ipsom help vue lorem ipsom
      help vue
    </p>
    <p>{{ pageName }}</p>
    <p>{{ pageDescription }}</p>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="posts_area">
                 <BlogPosts v-for=" post in posts" 
                 :key="post.id" 
                 :title="post.title"
                 :author="post.author" 
                 :date="post.date" 
                 :content="post.content" 
                 :category="post.category" :views="post.views"/> 
                </div>
               
            </div>
         <div class="col-md-4">
             <div class="sidbar">
                <BlogSidbar/> 
             </div>
             
             </div> 
        </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidbar from "@/components/Blog/BlogSidbar.vue"; 
import JsonPost from "../Json/blog_posts.json"; 
export default {
  data: function() {
    return {
      pageName: "Blog",
      pageDescription: "this Blog page",
        posts: JsonPost
    };
  },
  name: "Blog",
  components: {
      BlogPosts,
      BlogSidbar,
    
  }
};
</script>
