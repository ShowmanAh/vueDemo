<template>
    <div class="blog_sidbar">
        <p>{{title | upercase}}</p>
    </div>
</template>
<script>
export default {
    data: function(){
      return {
       title: 'testing',
      };
    },
    name: 'BlogSidbar',
   filters: { // local filters
        upercase: function(v){
     return v.toUpperCase();
    }
   }
}
</script>