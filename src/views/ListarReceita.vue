<template>
  <div class="ma-5">
    <h1 class="text-h4 text-sm-h3 text-md-h1 display-4 d-flex justify-center">Minha Receita</h1>
    <v-text-field
      label="Nome da receita"
      append-icon="mdi-magnify"
      v-model="titulo"      
    >
    </v-text-field>
    <v-list>
      <v-list-item
        class="d-flex justify-space-between"
        v-bind:key="receita.titulo"
        v-for="receita in receitas"        
      >
        <v-list-item-content>
          {{ receita.titulo }}
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text class="black--text"
            >Editar</v-list-item-action-text
          >
          <v-icon class="black--text mr-1" @click="editarReceita(receita)"
            >mdi-circle-edit-outline</v-icon
          >
        </v-list-item-action>

        <v-list-item-action>
          <v-list-item-action-text class="black--text"
            >Detalhar</v-list-item-action-text
          >
          <v-icon class="black--text mr-3" @click="detalharReceita(receita)"
            >mdi-page-next-outline</v-icon
          >
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <div class="d-sm-none">
      <v-btn block color="primary" @click="adicionarReceita">Adicionar receita</v-btn>
    </div>

    <div class="d-none d-sm-flex ma-5 justify-end">
      <v-btn color="primary" fab @click="adicionarReceita">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
   

  </div>
</template>

<script>
export default {
  name: "ListarReceita",
  data: function () {
    return {
      listaReceitas: this.$store.getters.getLista,            
      titulo: "",
    };
  },
  computed:{
    receitas: function(){
      if (this.titulo){
        return this.listaReceitas.filter(receita => receita.titulo.toUpperCase().includes(this.titulo.toUpperCase()))
      }
      else{
        return this.listaReceitas;
      }      
    }
  },

  mounted: function(){
    this.listaReceitas = this.$store.getters.getLista;    
  },

  methods: {
    editarReceita: function (receita) {      
      this.$router.push({
        name: "Editar",
        params: {
          idReceita: this.listaReceitas.indexOf(receita),
          acao: 2
        },
      });      
    },

    detalharReceita: function (receita) {
      this.$router.push({
        name: "Detalhar",
        params: {
          idReceita: this.listaReceitas.indexOf(receita)
        },
      });      
    },

    adicionarReceita: function () {
      this.$router.push({
        name: "Editar",
        params: {
          idReceita: null,
          acao: 1
        },
      });      
    },
  },
};
</script>
