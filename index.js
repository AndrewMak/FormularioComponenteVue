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
      spanc : spanc
    },
    
    props: {
      schema: { required: true },
      data: { required: true }
    }
  };
  
  Vue.component('v-form', vForm);
  
  // Root Vue instance
  const app =new Vue({
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
        }
      }
    }
  });