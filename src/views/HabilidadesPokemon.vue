<template>
    <div v-if="!pokemon.status">
            Selecione um Pokémon
        </div>
    <div v-else>
        <table class="table text-white">
            <tbody>
                <transition-group name="lista">
                    <tr v-for="(h, indice) in pokemon.habilidades" :key="h">
                        <td>{{ h }}</td>
                        <td class="d-flex justify-content-end">
                            <button type="button" class="btn btn-danger btn-sm" @click="$emit('removerHabilidade', indice)">x</button>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>
        <input type="text" class="form-control" placeholder="Adicionar habilidade" v-model="habilidade" @keyup.enter="adicionarHabilidade">
    </div>
</template>

<style scoped>
.table td {
    border: none;
}
</style>

<script>

export default ({
    props: {
        pokemon: Object
    },
    data: () => ({
        habilidade: ''
    }),
    methods: {
        adicionarHabilidade() {
            this.$emit('adicionarHabilidade', this.habilidade)
            this.habilidade = ''
        }
    }
})
</script>