<template>
    <div>
        {{ count }}
        <button @click="incrementSync({step: stepSync})">increment +{{ stepSync }}</button>
        <button @click="decrementSync({step: stepSync})">decrement -{{ stepSync }}</button>
        <hr>
        <button @click="incrementAsync({step: stepAsync})">increment async +{{ stepAsync }}</button>
        <button @click="decrementAsync({step: stepAsync})">decrement async -{{ stepAsync }}</button>
        <button @click="decrementAsyncTwice({step: stepAsync})">decrement async twice -{{ stepAsync }}</button>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters, mapMutations } = createNamespacedHelpers('counter')
import * as types from '../../store/actionTypes';

  export default {
    name: "Counter",
    data(){
      return {
        stepSync: 1,
        stepAsync: 5
      }
    },
    methods: {
      // incrementt(){
      //   this.$store.dispatch({ type: 'increment', step: this.step });
      //   // this.$store.dispatch('increment', { step: this.step });
      // },
      // decrement(){
      //   this.$store.commit({type: 'DECREMENT', step: this.step});
      // }
      ...mapMutations({
        incrementSync: types.INCREMENT_SYNC,
        decrementSync: types.DECREMENT_SYNC
      }),
      ...mapActions({
        incrementAsync: types.INCREMENT_ASYNC,
        decrementAsync: types.DECREMENT_ASYNC,
        decrementAsyncTwice: types.DECREMENT_ASYNC_TWICE
      })
    },
    computed: {
      ...mapState({
        count: state => state.count
      }),
      ...mapGetters({
        getCount: 'getCount'
      })
    },
  }
</script>

<style scoped>
div {
    font-size: 50px;
}
</style>