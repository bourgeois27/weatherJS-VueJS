<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <p id="title">Localisation :</p>
        <div v-if="city.length > 0" class="mb-3">
          <i class="material-icons">location_on</i><span class="text">{{ city }}, {{ state }}</span>
        </div>
      </div>
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
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 20px;
    background-color: blue;
    padding: 20px;
    border-radius: 10px;
    border: 1px blue;
    box-shadow: 5px 5px #888888;
  }

  #title {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;
    color: #fff;
  }

  .text {
    color: #fff;
  }

  .material-icons {
    font-size: 1.8em;
    padding-right: 10px;
    color: #5bc0de;
  }
</style>

