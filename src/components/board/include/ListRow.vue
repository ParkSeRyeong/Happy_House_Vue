<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="`board/view?no=${no}`">{{ title }}</router-link>
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate(regtime) }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "listrow",
  props: {
    no: Number,
    title: String,
    writer: String,
    regtime: String,
    content: String,
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
};
</script>

<style>
</style>
