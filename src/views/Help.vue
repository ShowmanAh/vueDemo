<template>
  <div class="help">
    <h1>Help</h1>
    <p>
      lorem ipsom help vue lorem ipsom help vue lorem ipsom help vue lorem ipsom
      help vue
    </p>
    <p>{{ pageName }}</p>
    <p>{{ pageDescription }}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      pageName: "help us",
      pageDescription: "this help us page"
    };
  },
  name: "Help"
};
</script>
