<template>
   <div>
      <form v-on:click.self="msg('form')">
         From
         <div @click.once="msg('div')">
            Div
            <p @click.stop="msg('p')">
               P
               <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
            </p>
         </div>
      </form>
      <hr>
      <button type="button" v-on:click="increaseCounter">Add 1</button>
      <input v-model.number="num">
      <button type="button" @click="setCount(num, $event)">add {{ num }}</button>
      <p>The Counter is : {{ counter }}</p>
   </div>
</template>

<script>
   export default { 
      data() {
         return {
            counter : 0,
            num : 7
         }
      },
      methods : {
         msg(tag) {
            alert(`${tag}, 선택!`)
         },
         increaseCounter(event) {
            console.log('increase', event);            
            this.counter++;
         },
         setCount(value, event) {
            console.log('setCount', event);
            this.counter += value;
         }
      }
   }
</script>

<style> 
   form, form * {
      margin: 10px;
      border: 1px solid yellowgreen;
   }
</style>