<template>
    <b-container>
        <b-row>
            <b-col md="6">
                <div class="charge-section" v-for="(section, sectionIndex) in sections" :key="section.name">
                    <b>{{ section.name }}</b>
                    <div class="charge-subsection" v-for="(charge, chargeIndex) in section.charges" :key="charge.name">
                        <b-row class="charge-item">
                            <b-col md="7" style="cursor: pointer" @click="selectCharge(sectionIndex, chargeIndex)">
                                <span v-if="charge.selected" class="text-primary font-weight-bold">{{ charge.name }}</span>
                                <span v-else>{{ charge.name }}</span>
                            </b-col>
                            <b-col md="2">
                                <span v-if="charge.fine">${{ charge.fine.toLocaleString() }}</span>
                            </b-col>
                            <b-col md="1">
                                <span v-if="charge.months">{{ charge.months }}m</span>
                            </b-col>
                            <b-col md="2">
                                <span v-if="charge.restitution">${{ charge.restitution.toLocaleString() }}</span>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
            <b-col>
                <b-row>
                    <b-col style="margin-bottom: 25px">
                        <button class="btn btn-block btn-outline-primary" @click="reset">
                            Reset Charges
                        </button>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="font-weight-bold">If they want to pay fines</div>
                        <div>
                            <span v-if="sentence.fines <= 15000">Fines: <span class="text-primary">${{ sentence.fines.toLocaleString() }}</span></span>
                            <span v-else>Fines: <span class="text-primary">${{ sentence.fines.toLocaleString() }}</span></span>
                        </div>
                        <div>
                            <span v-if="sentence.man <= 45">(M) Time: <span class="text-primary">{{ sentence.man }} months</span></span>
                            <span v-else>(M) Time: <span class="text-primary"><strike>{{ sentence.man }} months</strike> 45 months</span></span>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="font-weight-bold">Don't want to pay fines</div>
                        <div>
                            <span v-if="sentence.time <= 45">Time: <span class="text-primary">{{ sentence.time }} months</span></span>
                            <span v-else>Time: <span class="text-primary"><strike>{{ sentence.time }} months</strike> 45 months</span></span>
                        </div>
                        <div>
                            <span v-if="sentence.res <= 10000">Restitution: <span class="text-primary">${{ sentence.res.toLocaleString() }}</span></span>
                            <span v-else>Restitution: <span class="text-primary">${{ sentence.res.toLocaleString() }}</span></span>
                        </div>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 25px">
                    <b-col>
                        <b>Charge List</b>
                        <div>
                            <span v-for="charge in sentence.charges">
                                {{ charge.name }} |
                            </span>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import data from '../config/data';
  import Vue from 'vue'
  export default {
  name: 'Home',
  components: {},
  data() {
    return {
      sections: data
    };
  },
  mounted() {

  },
  methods: {
    reset() {
      for(const sIndex in this.sections) {
        for (const cIndex in this.sections[sIndex]['charges']) {
          const charge = this.sections[sIndex]['charges'][cIndex];
          if (charge.selected) {
            Vue.set(this.sections[sIndex]['charges'][cIndex], 'selected', false);
          }
        }
      }
    },
    selectCharge(sIndex, cIndex) {
      Vue.set(this.sections[sIndex]['charges'][cIndex], 'selected', !this.sections[sIndex]['charges'][cIndex].selected);
    },
  },
    computed: {
      sentence() {
        let data = {fines: 0, time: 0, res: 0, man: 0, charges: []};
        for(const section of this.sections) {
          for (const charge of section.charges) {
            if (charge.selected) {
              data.charges.push(charge);
              if(charge.fine) data.fines += charge.fine;
              if(charge.months) data.time += charge.months;
              if(charge.restitution) data.res += charge.restitution;
              if(!charge.fine && charge.months) data.man += charge.months;
            }
          }
        }
        return data;
      }
    }
}
</script>

<style lang="scss">
    .charge-subsection {
        padding-left: 20px;
    }
    .charge-item {
        // display: inline;
        &:hover {
            background-color: #d7d7d7;
        }
    }
</style>
