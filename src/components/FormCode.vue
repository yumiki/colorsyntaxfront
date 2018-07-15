<template>
  <div class="formCode">
    <vue-form :state="formstate" @submit.prevent="onSubmit">

      <validate auto-label class="form-group" :class="fieldClassName(formstate.email)">
        <label>Email</label>
        <input type="email" name="email" class="form-control" v-model.lazy="model.email">

        <field-messages auto-label name="email" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="email">Email is invalid</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.language)">
        <label>Langage</label>

        <select class="form-control" name="language" required v-model.lazy="model.language">
          <option :value="null">Choose...</option>
          <option v-for="(language,index) in availableLanguages" :key="index" :value="language">{{language}}</option>
        </select>

        <field-messages name="language" show="$touched || $dirty || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="required">Language is a required field</div>
        </field-messages>

      </validate>

      <validate auto-label class="form-group" :class="fieldClassName(formstate.code)">
        <label>Code</label>
        <textarea name="comments" class="form-control" :maxlength="limit" v-model.lazy="model.code" style="height: 300px"></textarea>
        <small class="form-text text-muted">Vous ne pouvez pas mettre plus de {{limit}} caractères.</small>
        <field-messages name="code" show="$touched || $submitted" class="form-control-feedback">
          <div>Success!</div>
          <div slot="maxlength">Vous ne pouvez pas mettre plus de {{limit}} caractères</div>
        </field-messages>
      </validate>

      <div class="py-2 text-center">
        <button class="btn btn-primary" type="submit" :disabled="this.loading===true">Submit</button>
      </div>
    </vue-form>
  </div>
</template>

<script>
  import HighlightCode from './HighlightCode.vue'
  import {mapMutations,mapState} from 'vuex'

  export default {
  name: 'form-code',
  components: {
    HighlightCode
  },
  data () {
    return {
      limit: 3000,
      formstate: {},
      availableLanguages: ['javascript','php','cs'],
      model: {
        email: '',
        language: null,
        code: '',
      }
    }
  },
  computed: {
    ...mapState({
      code: (state) => state.code,
      loading: (state) => state.loading.currentState
    })
  },
  methods: {
    ...mapMutations(['setCode','setLoading']),
    fieldClassName: function (field) {
      if(!field) {
        return '';
      }
      if((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function() {
      console.log(this.formstate.$valid);
      console.log(this.model);
      if(this.model.code!==null && this.model.language!==null)
      this.submitForm().then(value => {
        this.setCode(value);
      }, reason => {
        console.error(reason)
      }).finally(()=>{
        console.error('Au final')
        this.setLoading({currentState: false})
      })
    },
    submitForm:  function () {
      return new Promise((resolve, reject) => {
        let url = 'https://openwhisk.eu-gb.bluemix.net/api/v1/web/novar.ludovic%40gmail.com_dev/default/colorSyntax';
        let data = JSON.stringify(this.model);

        console.log(data);

        let xhr = new XMLHttpRequest();

        xhr.open('POST', url);

        xhr.setRequestHeader('content-type', 'application/json');

        xhr.onload = function () {
          if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            resolve(json)
          } else {
            reject(Error('Error code:' + xhr.statusText))
          }
        };

        xhr.onerror = function () {
          reject(Error('There was a network error.'))
        };

        xhr.send(data)
        this.setLoading({currentState: true})
      })
    }
  }
}
</script>

<style scoped>
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
</style>
