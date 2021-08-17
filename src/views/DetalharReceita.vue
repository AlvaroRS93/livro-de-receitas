<template>
  <div class="ma-5">
    <h1 class="display-3 d-flex justify-center">Detalhar Receita</h1>
    
    <v-text-field label="Título" v-model="receita.titulo" readonly></v-text-field>

    <v-row>
      <v-col id="boxIngredientes" class="ma-1">
        <div class="grey white--text rounded-lg pa-3">Ingredientes</div>

        <v-list v-bind:key="ingrediente" v-for="ingrediente in receita.ingredientes">
          <v-list-item class="ma-n3" >
            <v-col class="my-n3 d-flex justify-space-between">
              <v-list-item-content class="primary--text my-auto">
                {{ ingrediente }} 
              </v-list-item-content>
            </v-col>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col id="modoDePreparo" class="ma-1">
        <div class="grey white--text rounded-lg pa-3">Modo de Preparo</div>
        <v-textarea label="Modo de preparo" v-model="receita.modoDePreparo" auto-grow readonly></v-textarea>
      </v-col> 
    </v-row>





    <div class="d-flex justify-center">
      <v-btn class="ma-3" color="primary" @click="voltar" block>Voltar</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {
    this.receita = this.$store.getters.getLista[this.idReceita];     
  },
  data: function () {
    return {
      idReceita: this.$router.history.current.params.idReceita,
      receita: {
        titulo: "",
        ingredientes: [],
        modoDePreparo: ""
      },
    };
  },
  methods: {
    voltar: function () {
      this.$router.push("/");
    },
  },
};
</script>