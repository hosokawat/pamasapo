<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-select
          v-model="filter_category"
          :items="filter_items"
          label="絞り込み"
          multiple
          chips
          filled
        ></v-select>
      <span>{{filter_category}}</span>
      </v-flex>
      <v-flex xs6>
        <v-select
          v-model="sort_category"
          :items="sort_items"
          label="並び替え"
          chips
          filled
        ></v-select>
      <span>{{sort_category}}</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs6>
        <v-btn block color="grey lighten-3">常時</v-btn>
      </v-flex>

      <v-flex xs6>
        <v-btn block color="grey lighten-3">新年度</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 v-for="item in filtered_centers" :key="item.name">
        <NurseryCard :item="item" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'
  import NurseryCard from "~/components/nurseries/NurseryCard.vue"

  export default {
    components: {NurseryCard},
    data : function () {

      var columns = {
          id: 'ID',
          name: '保育園名',
          postalCode: '郵便番号',
      };
 
    var sortOrders = {};
    Object.keys(columns).forEach(function (key) {
        sortOrders[key] = 1
    });

      return {
        filter_items: [
          '許認可',
          '私立・公立',
          '開園時間',
          '閉園時間',
          '24時間',
          '延長',
          '一時保育',
          '夜間・休日',
          '駐車場'
        ],
        sort_items: [
          '許認可',
          '私立・公立',
          '開園時間',
          '閉園時間',
          '24時間',
          '延長',
          '一時保育',
          '夜間・休日',
          '駐車場'
        ],
        filter_category:[],
        sort_category:[],
        sortKey: 'name',
        sortOrders: sortOrders
      }
    },

    computed: {
      ...mapGetters({
        centers: 'center/items'
      }),

      filtered_centers: function () {
        var filter_category = this.filter_category;
        var data = this.centers;

         data = data.filter(function (row) {
            // とりあえず花見川区固定で絞り込み可能なことを確認
            if (row['ward'] !== "花見川区") {
                return false;
            }
            return row;
          })

        var sortKey = this.sortKey;
        var order = this.sortOrders[sortKey] || 1;
        
        if (sortKey) {
            data = data.slice().sort(function(a, b){
                a = a[sortKey];
                b = b[sortKey];
                return (a === b ? 0 : a > b ? 1 : -1) * order;
            });
        }

        return data;
      }
    },

    async fetch({store}) {
      await store.dispatch('center/search')
    },
  }
</script>
