<template>
  <div class="door-area">
    <div class="door-frame" :class="{ selected: selected && !open }">
        <GiftDisplay v-if="open && hasGift"/>
    </div>
    <div class="door" :class="{ open }" @click="selected = !selected">
        <div class="number" :class="{ selected, open }" >{{ number }}</div>
        <div class="knob" :class="{ selected, open }" @click.stop="open = true"></div>
    </div>
  </div>
</template>

<script>
import GiftDisplay from './GiftDisplay.vue'

export default {
    name: 'DoorDisplay',
    components: { GiftDisplay },
    props: {
        number: {},
        hasGift: { type: Boolean}
    },
    data: function(){
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
    :root{
        --door-border: 5px solid brown;
        --selected-border: 5px solid yellow;
    }
    .door-area{
        position: relative;
        width: 200px;
        height: 310px;
        border-bottom: 10px solid #aaa;
        margin-bottom: 20px;
        font-size: 3rem;

        display: flex;
        justify-content: center;
    }

    .door-frame{
        position: absolute;
        height: 300px;
        width: 180px;

        border-left: var(--door-border);
        border-top: var(--door-border);
        border-right: var(--door-border);

        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .door-frame.selected{
        border-left: var(--selected-border);
        border-top: var(--selected-border);
        border-right: var(--selected-border);
    }

    .door{
        position: absolute;
        top: 5px;
        height: 295px;
        width: 170px;
        background: chocolate;

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .door.open{
        background-color: #0007;
    }

    .door .number.open{
        display: none;
    }

    .door .number.selected {
        color: yellow;
    }

    .door .knob{
        height: 20px;
        width: 20px;
        border-radius: 10px;

        background-color: brown;
        border: 1px solid gold;

        align-self: flex-start;
        margin-top: 60px;
    }

    .door .knob.open{
        display: none;
    }

    .door .knob.selected{
        border-width: 2px;
    }
</style>