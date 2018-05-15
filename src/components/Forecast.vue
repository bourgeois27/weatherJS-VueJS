<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-1">
        <p id="title">Forecast</p>
      </div>
    </div>
    <div class="row">
      <ul>
        <li v-for="day in forecast" :key="day.weekday">
          <p>{{ day.weekday }}</p>
          <img :src="day.icon">
          <p>max : {{ day.high }}  &#8451;</p>
          <p>min : {{ day.low }}  &#8451;</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    forecast: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
    background-color: blue;
    color: #fff;
    border: 1px blue;
    box-shadow: 5px 5px #888888;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }

  #title {
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #fff;
  }

  ul {
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    list-style: none;
    padding: 0 0 0 15px;
  }

  li {
    padding-right: 15px;
    text-align: center;
    margin: 10px 0 0 0;
  }

  li:last-of-type {
    padding-right: 0;
  }
</style>
