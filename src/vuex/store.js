import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listaReceitas: [{
            titulo: "Bolo de cenoura",
            ingredientes: ['3 Cenouras', '4 Ovos', '2 xícaras de açucar'],
            modoDePreparo: "Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.\nAcrescente o açúcar e bata novamente por 5 minutos. \nEm uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente. \nAcrescente o fermento e misture lentamente com uma colher. \nAsse em um forno preaquecido a 180° C por aproximadamente 40 minutos."
          },
          {
            titulo: "Brigadeiro Gourmet",
            ingredientes: ['1 cx Leite Condensado', '1 cx Creme de Leite', '1 colher de Margarina', '200g de Achocolatado em pó'],
            modoDePreparo: "Em um copo, misture a água e a farinha de trigo, dilua bem e reserve. \nEm uma panela com fogo desligado, adicione o leite condensado, o creme de leite, a mistura reservada e a margarina, misturando bem. \nEm seguida, coloque a panela em fogo médio e adicione o chocolate em pó, e mexa por 10 minutos até que obtenha o ponto de brigadeiro (que é aquele que quando você inclinar a sua panela, o doce desgrudará do fundo, formando ondas). \nTome cuidado para que seu brigadeiro não queime, mexa sem parar, pois estará em fogo médio. \nCaso passe os 10 minutos e seu brigadeiro ainda não tenha atingido o ponto de brigadeiro, mexa por mais 3 minutos e desligue o fogo. \nCom o fogo desligado, transfira o brigadeiro rapidamente para outro recipiente e cubra com papel filme para que seu doce fique protegido na geladeira. \nDeixe esfriar durante 20 a 30 minutos. \nRetire da geladeira, retire o papel filme, unte suas mãos com margarina e enrole seus brigadeiros gourmet do tamanho desejado. \nEm seguida, envolva-os nos granulados/confeitos. \nE está pronto seu brigadeiro gourmet, bom apetite!"
          },]        
    },
    mutations: {
        adicionaReceita: function(state, receita){
            state.listaReceitas.push(receita);
        }
    },
    getters: {
        getLista: state => {
            return state.listaReceitas;
        }
    }
});