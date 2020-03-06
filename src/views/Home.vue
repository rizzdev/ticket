<template>
    <b-container>
        <b-row>
            <b-col md="7">
                <input v-model="filter" class="form-control" placeholder="Filter" style="margin-bottom: 20px"/>
                <div class="charge-section" v-for="(section, sectionIndex) in sections" :key="section.name">
                    <b>{{ section.name }}</b>
                    <div class="charge-subsection" v-for="(charge, chargeIndex) in section.charges" :key="charge.name" v-if="filter">
                        <charge-item :charge="charge"
                                     v-if="charge.name.toLowerCase().includes(filter.toLowerCase())"
                                     :charge-index="chargeIndex"
                                     :section-index="sectionIndex"
                                     @selected="selectCharge($event)"/>
                    </div>
                    <div class="charge-subsection" v-for="(charge, chargeIndex) in section.charges" :key="charge.name" v-if="!filter">
                        <charge-item :charge="charge"
                                     :charge-index="chargeIndex"
                                     :section-index="sectionIndex"
                                     @selected="selectCharge($event)"/>
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
                            <span v-else>Fines: <span class="text-primary"><strike>${{ sentence.fines.toLocaleString() }}</strike> $15,000</span></span>
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
                            <span v-else>Restitution: <span class="text-primary"><strike>${{ sentence.res.toLocaleString() }}</strike> $10,000</span></span>
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
                <b-row style="margin-top: 25px" v-if="stackIssues.length > 0">
                    <b-col>
                        <b>Issues with selected charges</b>
                        <br>
                        <div v-for="issue in stackIssues" class="text-danger">
                            {{ issue }}
                            <br>
                        </div>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 25px">
                    <b-col>
                        <b-form-group label="Notes">
                            <b-textarea v-model="notes" :rows="7"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 25px">
                    <b-col>
                        <center>
                            Property of Badlands RP
                            <br>
                            <br>
                            Made with ❤️ by Mitchel Red ( <span class="text-muted">/usr/bin/rizz#1234</span> )
                        </center>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import data from '../config/data';
  import Vue from 'vue'
  import ChargeItem from '../components/ChargeItem';
  export default {
  name: 'Home',
  components: {ChargeItem},
  data() {
    return {
      filter: null,
      sections: data,
      stackIssues: [],
      notes: null,
    };
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
    selectCharge(e) {
      Vue.set(this.sections[e.sectionIndex]['charges'][e.chargeIndex],
              'selected', !this.sections[e.sectionIndex]['charges'][e.chargeIndex].selected);
    },
  },
    computed: {
      sentence() {
        this.stackIssues = [];
        let preventStacking = [];
        for(const section of this.sections) {
          for (const charge of section.charges) {
            if (charge.cantStack && charge.selected) {
              preventStacking.push(...charge.cantStack);
            }
          }
        }
        let data = {fines: 0, time: 0, res: 0, man: 0, charges: []};
        for(const section of this.sections) {
          for (const charge of section.charges) {
            if (charge.selected) {
              data.charges.push(charge);
              if(charge.fine) data.fines += charge.fine;
              if(charge.months) data.time += charge.months;
              if(charge.restitution) data.res += charge.restitution;
              if(!charge.fine && charge.months) data.man += charge.months;
              if (preventStacking.includes(charge.name)) {
                this.stackIssues.push(`${charge.name} conflicts with another charge, please make sure you are not stacking non-stackable charges`);
              }
            }
          }
        }
        return data;
      },
    },
    watch: {
      filter() {
/*
        this.$search(this.filter, this.sections, {
          shouldSort: false,
          keys: ['charges.name']
        }).then(results => {
          this.filtered = results;
        });
*/
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
        &.selected {
            color: #005fff;
            font-weight: bold;
        }
    }
</style>
