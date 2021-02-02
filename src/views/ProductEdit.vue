<template>
  <div class="sign-up">
    <div v-if="errors">
      <ul class="errors" v-for="(v, k) in errors" :key="k">
        <li class="error" v-for="error in v" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-if="success">
      <p class="success">{{ success }}</p>
    </div>
    <form @submit.prevent="submit" class="form" enctype="multipart/form-data">
      <div class="form-group">
        <label class="label" for="title">Title</label>
        <input class="input" type="text" name="title" v-model="form.title" />
      </div>
      <div class="form-group">
        <label class="label" for="description">Description</label>
        <textarea
          class="input"
          name="description"
          id="description"
          v-model="form.description"
        ></textarea>
      </div>
      <div class="form-group">
        <label class="label" for="price">Price</label>
        <input class="input" type="number" name="price" v-model="form.price" />
      </div>
      <div class="form-group">
        <label class="label" for="image">Image</label>
        <input
          class="input"
          type="file"
          name="image"
          @change="processFile($event)"
        />
      </div>

      <div class="form-group">
        <button class="btn-signup">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductEdit",
  components: {},
  data() {
    return {
      form: {
        id: null,
        title: null,
        description: null,
        price: null,
        image: null,
      },
      errors: [],
      success: null,
    };
  },
  methods: {
    async submit() {
      let formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("id", this.form.id);
      formData.append("title", this.form.title);
      formData.append("description", this.form.description);
      formData.append("price", this.form.price);
      formData.append("image", this.form.image);
      await axios
        .post(`products/${this.form.id}`, formData, {
          headers: {
            "_method": "PUT",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status == 201) {
            this.success = response.data.message;
            axios.get(`products/${this.$route.params.id}`).then(({ data }) => {
              this.form.title = data.data.title;
              this.form.description = data.data.description;
              this.form.price = data.data.price;
            });
            this.form.image = null;
          }
        })
        .catch(({ response }) => {
          this.errors = response;
        });
    },
    processFile(event) {
      this.form.image = event.target.files[0];
    },
  },
  created() {
    this.form.id = this.$route.params.id;
    axios.get(`products/${this.form.id}`).then(({ data }) => {
      this.form.title = data.data.title;
      this.form.description = data.data.description;
      this.form.price = data.data.price;
    });
  },
};
</script>

<style scoped>
.sign-up {
  margin-top: 75px;
}
.form {
  width: 400px;
  margin: 0 auto;
}
.form-group {
  margin: 20px;
  width: 100%;
}
.label {
  display: block;
  text-align: left;
  font-size: 16px;
  margin: 8px 0;
  font-weight: bold;
}
.input {
  width: 100%;
  border-radius: 6px;
  border: 1px solid #0a00b6;
  padding: 8px 10px;
  outline: none;
  font-size: 16px;
}
.input:active,
.input:focus {
  border: 2px solid #0a00b6;
  padding: 7px 9px;
  outline: none;
}
.btn-signup {
  background-color: #0a00b6;
  padding: 10px 14px;
  border: 1px solid #0a00b6;
  border-radius: 6px;
  outline: none;
  color: white;
  font-weight: bold;
}
.btn-signup:hover {
  box-shadow: 4px 4px 4px rgba(62, 59, 235, 0.5);
}
.errors {
  list-style: none;
}
.error {
  color: red;
}
.error {
  color: green;
}
</style>