// Text input 
const textInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },

  template: `
    <div class="form-control">
      <label>{{ field.label }}</label>
      <input class="input" type="text" :placeholder="field.placeholder" v-model="data.value">
    </div>
    `
};
const spanc = {
  props: {
    field: { required: true },
    data: { required: true }
  },

  template: `
    <div class="form-control">
      <label>{{ field.label }}</label>
      {{data.value}}
    </div>
    `
};
const paiorg = {
  props: {
    field: { required: true },
    data: { required: true }
  },

  template: `  
<div class="container-fluid" style="margin-top:20px">
<div class="row">
    <div class="col-md-12">
        <div class="tree">
            <ul>
                <li>
                    <a href="#">

                        <div class="container-fluid">
                            <div class="row">
                               {{data.value}}
                            </div>
                            <div class="row" style="margin-top: 35px;">
                                <i class="fa fa-exclamation-circle fa-2x"></i>
                            </div>
                            <div class="row">                            Diretor                           
                          
                            </div>
                        </div>

                    </a>
                    <ul>                                               
                        <li v-for="filho in data.valorfilho">
                            <a href="#">

                                <div class="container-fluid">
                                    <div class="row">
                                     {{filho.valor}}
                                    </div>
                                    <div class="row" style="margin-top: 35px;">
                                        <i class="fa fa-exclamation-circle fa-inv fa-2x"></i>
                                    </div>
                                    <div class="row">
                                     
                                    </div>
                                </div>

                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
    `
};
// Checkbox
const checkboxInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },

  template: `
    <div class="form-control">
      <label>{{ field.label }}</label>
      <label class="input">
        <input type="checkbox" v-model="data.value" :id="field.id">
        {{ field.placeholder }}
      </label>
    </div>
    `
};

// formulario dinamico
const vForm = {
  template: `
    <div class="VueForm">
      <template v-for="field in schema.fields">
        <component :is="field.type" :field="field" :data.sync="data[field.name]"></component>
      </template>
    </div>
    `,

  components: {
    textInput: textInput,
    checkboxInput: checkboxInput,
    spanc: spanc,
    paiorg: paiorg
  },

  props: {
    schema: { required: true },
    data: { required: true }
  }
};

Vue.component('v-form', vForm);

// Root Vue instance
const app = new Vue({
  el: '#app',

  data: {
    formSchema: {
      fields: [
        {
          type: 'text-input',
          name: 'first_name',
          id: 'first_name',
          label: 'Nome',
          placeholder: 'Digite seu nome'
        },
        {
          type: 'text-input',
          name: 'last_name',
          id: 'last_name',
          label: 'Sobrenome',
          placeholder: 'digite seu sobrenome'
        },
        {
          type: 'checkbox-input',
          name: 'is_admin',
          id: 'is_admin',
          label: 'Confirma',
          placeholder: 'tem certeza disso?'
        }
        ,
        {
          type: 'spanc',
          name: 'spanc',
          id: 'spanc',
          label: 'Span:'
        }
        ,
        {
          type: 'paiorg',
          name: 'paiorg',
          id: 'paiorg',
          label: 'paiorg:'
        }

      ]
    },
    formData: {
      first_name: {
        value: 'Andrew'
      },
      last_name: {
        value: 'Chan'
      },
      is_admin: {
        value: true
      },
      spanc: {
        value: 'Componente Span'
      },
      paiorg: {
        value: 'Diretor TI',
        valorfilho : [{valor:'P&D'},{valor:'EDN'},{valor:'Homologador'},]
      }
    }
  }
});