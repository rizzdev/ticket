<template>
    <b-row class="charge-item"
           :class="{ selected:charge.selected }"
           :title="charge.name"
           v-b-popover.hover.rightbottom="charge.description"
           style="cursor: pointer" @click="$emit('selected', { sectionIndex, chargeIndex })">
        <b-col md="6">
            <span v-if="charge.vehicle"><i class="text-muted fas fa-car-side fa-xs"></i>&nbsp;&nbsp;</span>
            <span v-if="charge.court"><i class="text-muted fas fa-gavel fa-xs"></i>&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;{{ charge.name }}</span>
        </b-col>
        <b-col md="2">
            <span v-if="charge.fine">${{ charge.fine.toLocaleString() }}</span>
        </b-col>
        <b-col md="2">
            <span v-if="charge.months">{{ charge.months }}m</span>
        </b-col>
        <b-col md="2">
            <span v-if="charge.restitution">${{ charge.restitution.toLocaleString() }}</span>
        </b-col>
    </b-row>
</template>

<script>
    // v-if="charge.name.toLowerCase().includes(filter.toLowerCase())"
    export default {
      name: 'ChargeItem',
      props: ['charge', 'chargeIndex', 'sectionIndex']
    }
</script>
