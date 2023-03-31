<template>
    <h2>
        Store State View
    </h2>
    <p>
        The current Store Count is {{ count }}
    </p>
    <p>
        The current Store Count as per Alias is {{ countAlias }}
    </p>
    <button @click="increment">Increase Count</button>

</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:mapState({
        count:state=>state.count,

        countAlias:'count',
    }),
    methods:{
        increment(){
            this.$store.state.count++;
        }
    }
}
</script>