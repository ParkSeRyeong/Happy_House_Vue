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
import moment from 'moment';

export default {
  name: "ListRow",
  props: {
    no: Number,
    title: String,
    writer: String,
    content:String,
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
td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}
</style>
