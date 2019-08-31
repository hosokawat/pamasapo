<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 v-for="item in recent_nursery_items()" :key="item.name">
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
      nursery_filter_items: "nursery/filter_items",
      recent_items: "recent/items"
    })
  },

  methods: {
    recent_nursery_items: function() {
      const ids = this.recent_items;
      return this.nursery_filter_items(ids);
    }
  },

  async fetch({ store }) {
    await store.dispatch("nursery/search");
  }
};
</script>
