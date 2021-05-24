<template>
  <tr>
    <td>{{ no }}</td>
    <td>
<<<<<<< HEAD
      <router-link :to="`Board/view?no=${no}`">{{ title }}</router-link>
=======
      <router-link :to="`board/view?no=${no}`">{{ title }}</router-link>
>>>>>>> cf8fea91b7520c541d40afcbaabff99f9e283532
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
