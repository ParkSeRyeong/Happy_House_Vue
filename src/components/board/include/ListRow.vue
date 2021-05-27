<template>
  <!-- <tr>
    <td>{{ no }}</td>
    <td>
      <router-link :to="`board/view?no=${no}`" class="fontToWhite">{{ title }}</router-link>
    </td>
    <td>{{ writer }}</td>
    <td>{{ getFormatDate(regtime) }}</td>
  </tr> -->
  <div class="col-lg-4">
    <card class="border-0" hover shadow body-classes="py-5">
      <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
        {{ no }}</icon
      >
      <h6 class="text-primary text-uppercase">
        <router-link :to="`board/view?no=${no}`"
          ><h5>{{ title }}</h5></router-link
        >
      </h6>
      <p class="description mt-3">{{ writer }}</p>
      <p class="description mt-3">{{ getFormatDate(regtime) }}</p>
      <!-- <base-button tag="a" type="primary" class="mt-4">
              <router-link>View detail</router-link>
          </base-button> -->
    </card>
  </div>
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
    write_type: String
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
};
</script>

<style></style>
