<template >
  <div class="display">{{ value }}</div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
  .display{
    grid-column: span 4;
    background-color: #0004;

    font-size: 2.1em;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
  }
</style>