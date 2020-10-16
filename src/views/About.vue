<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-bold>{{ pageName }}</p>
    {{ pageDesciption }}
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      pageName: "aboutus",
      pageDesciption: "this about us"
    };
  },
  name: "about"
};
</script>
