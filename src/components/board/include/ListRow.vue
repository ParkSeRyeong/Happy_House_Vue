<template>
  <tr>
    <td>{{ no }}</td>
    <td>
      <!-- <router-link :to="`/read?no=${no}`">{{ title }}</router-link> -->
      <router-link :to="`/board/view?no=${no}`">{{ title }}</router-link>
      <!-- <router-link :to="{ name: 'board-view', params: { no: no } }">{{
        title
      }}</router-link> -->
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate(regtime) }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  // name: "ListRow",
  name: "params",
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
