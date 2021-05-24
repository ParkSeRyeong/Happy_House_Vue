<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="`Board/view?no=${no}`">{{ title }}</router-link>
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate(regtime) }}</td>
  </tr>
</template>

<script>
export default {
  name: "ListRow",
  props: {
    no: Number,
    title: String,
    author: String,
    regtime: String
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD');
    },
  }
};
</script>

<style>
</style>
