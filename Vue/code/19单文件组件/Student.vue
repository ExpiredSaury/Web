<template>
  <div>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
  </div>
</template>


<script>
export default {
  name: "Student",
  data() {
    return {
      name: "李四",
      age: 18,
    };
  },
};
</script>