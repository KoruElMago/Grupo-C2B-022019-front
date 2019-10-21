<template>
    <v-container fluid>
        <v-layout>

            <v-col > 
                <v-row>
                    <v-btn v-on:click="eleccion=c"> pasar cliente</v-btn>
                </v-row>
            </v-col>
            <v-col v-if=" eleccion=='c' "> <FormIngresoCliente /> </v-col>
            <v-col v-if=" eleccion=='p' "> <FormIngresoProveedor /> </v-col>
            
        </v-layout>
    </v-container>
</template>

<script>
import FormIngresoCliente from '../components/FormIngresoCliente.vue';
import FormIngresoProveedor from '../components/FormIngresoProveedor.vue';

export default {
    name: 'join',
    components: {
        FormIngresoCliente, FormIngresoProveedor
    },
    data: () => {return {eleccion:'?'}; }
};
</script><style scoped>
</style>