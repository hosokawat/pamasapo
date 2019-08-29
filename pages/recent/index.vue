<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 v-for="item in centers" :key="item.name">
        <NurseryCard :item="item" />
        <p class="grey--text lighten-4 float-right">2019/7/7 12時00分に閲覧しました</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import NurseryCard from "~/components/nurseries/NurseryCard.vue";

export default {
  components: { NurseryCard },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      centers: "center/items"
    })
  },

  async fetch({ store }) {
    await store.dispatch("center/search");
  },
  methods: {
    history: function() {}
  }
};
/*
  components: { NurseryCard } //,
  /*
data() {
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
      }
    },

    computed: {
      ...mapGetters({
        centers: 'center/items'
      })
    },

    async fetch({store}) {
      await store.dispatch('center/search')
    },
};
*/
</script>
