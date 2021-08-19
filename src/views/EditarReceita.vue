<template>
  <div class="ma-5">
    <v-form ref="form">

        <h1 class="text-h4 text-sm-h3 text-md-h1 display-3 d-flex justify-center">{{ tituloDaTela }}</h1>
        <v-text-field label="Título" v-model="receita.titulo" :rules="this.regrasValidacao.titulo"></v-text-field>

        <v-row>
          <v-col id="boxIngredientes" class="ma-1" cols="12" sm="6">
            <div class="grey white--text rounded-lg pa-3">Ingredientes</div>

            <div>
              <v-col class="ma-n1 d-flex justify-space-between">
                <v-text-field
                  v-model="novoIngrediente"
                  class="mr-6"
                  label="Ingredientes"                  
                ></v-text-field>
                <v-btn small fab outlined color="primary" class="my-auto">
                  <v-icon @click="adicionarIngrediente(novoIngrediente)"
                    >mdi-plus</v-icon
                  >
                </v-btn>
              </v-col>
            </div>

            <v-list
              v-bind:key="ingrediente"
              v-for="ingrediente in receita.ingredientes"
            >
              <v-list-item class="ma-n3">
                <v-col class="my-n3 d-flex justify-space-between">
                  <v-list-item-content class="primary--text my-auto">
                    {{ ingrediente }}
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn outlined fab small class="primary--text">
                      <v-icon
                        @click="
                          removerIngrediente(
                            receita.ingredientes.indexOf(ingrediente)
                          )
                        "
                        >mdi-delete</v-icon
                      >
                    </v-btn>
                  </v-list-item-action>
                </v-col>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col id="modoDePreparo" class="ma-1">
            <div class="grey white--text rounded-lg pa-3">Modo de Preparo</div>

              <v-textarea
                label="Modo de preparo"
                v-model="receita.modoDePreparo"
                auto-grow
                :rules="this.regrasValidacao.modoDePreparo"
              ></v-textarea>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            ><v-btn color="ma-2 primary" block @click="validar"
              >Confirmar</v-btn
            ></v-col
          >
          <v-col>
            <v-btn color="ma-2" block @click="voltar">Cancelar</v-btn></v-col
          >
        </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      receita: {
        titulo: "",
        ingredientes: [],
        modoDePreparo: "",
      },
      contadorIngredientes: 0,
      teste: false,
      tituloDaTela: "",
      novoIngrediente: "",
      acao: this.$router.history.current.params.acao,

      regrasValidacao: {
        titulo: [v => !!v || 'O preenchimento do campo Título é obrigatório!'],
        modoDePreparo: [v => !!v || 'O preenchimento do campo Modo de preparo é obrigatório!'],        
      }


    };
  },
  mounted: function () {
    var indice = this.$router.history.current.params.idReceita;

    if (this.acao == 1) {
      this.tituloDaTela = "Adicionar Receita";
    } else {
      this.tituloDaTela = "Editar Receita";

      this.receita = this.$store.getters.getLista[indice];
    }
  },
  methods: {
    voltar: function () {      
      this.$router.push("/");
    },
    confirmar: function () {
        
      if (this.acao == 1) {
        this.$store.commit("adicionaReceita", this.receita);
        window.alert("Receita adicionada!");
      } else if (this.acao == 2) {
        this.$store.commit("alteraReceita", this.receita);
        window.alert("Receita alterada!");
      }
      this.$router.push("/");
    },

    adicionarIngrediente: function (ingrediente) {
      if(ingrediente){
        this.receita.ingredientes.push(ingrediente);      
        this.novoIngrediente = "";           
      }
      
    },
    removerIngrediente: function (ingrediente) {
      this.receita.ingredientes.splice(ingrediente, 1);           
    },

    validar: function(){
      if(this.$refs.form.validate()){
        this.confirmar();
      }
    },  
  },
};
</script>