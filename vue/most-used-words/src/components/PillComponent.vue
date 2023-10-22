<template>
  <div class="pill">
    <span class="word">{{word}}</span>
    <span class="amount">{{amount}}</span>
  </div>
</template>

<script>
export default {
    name: "PillComponent",
    props: ["word","amount"]
}
</script>

<style scoped>
    .pill{
        margin: 10px;
        height: 55px;
        border-radius: 35px;
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        background-color: red;
        width: fit-content;
    }

    .pill .word{
        margin-left: 15px;
    }

    .pill .amount{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        color: red;
        margin: 10px;
        padding: 5px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>