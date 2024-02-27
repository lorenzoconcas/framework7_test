<template>
  <f7-page name="homepage" :page-content="false">
    <Navbar title="Testing"></Navbar>
    <f7-page-content>

      <f7-card-content>

        <f7-list strong-ios outline-ios dividers-ios>
          <f7-list-item title="Pick a lette (page)" smart-select :smart-select-params="{
            openIn: 'page',
            searchbar: true,
            searchbarPlaceholder: 'Search...',
            appendSearchbarNotFound: true,
            popupCloseLinkText: 'Close'
          }">
            <select v-model="selectedLetter" @change="onSelectChange">
              <option v-for="item in letters" :key="item.key" :value="item.key">
                <span> {{ item.displayValue }}</span>
              </option>
            </select>
          </f7-list-item>
        </f7-list>
      </f7-card-content>

      <f7-card-content>

        <f7-list strong-ios outline-ios dividers-ios>
          <f7-list-item title="Pick a number (popup)" smart-select :smart-select-params="{
            openIn: 'popup',
            searchbar: true,
            searchbarPlaceholder: 'Search...',
            appendSearchbarNotFound: true,
            closeOnSelect: true,
            popupCloseLinkText: 'Close'
          }">
            <select v-model="selectedNumber" @change="onSelectChange">
              <option v-for="item in letters" :key="item.key" :value="item.key">
                <span> {{ item.displayValue }}</span>
              </option>
            </select>
          </f7-list-item>
        </f7-list>
      </f7-card-content>

    </f7-page-content>
  </f7-page>
</template>
<script lang="ts">


import Navbar from "../components/layout/Navbar.vue"


export default {
  name: 'HomePage',
  props: {
    f7route: Object,
    f7router: Object,
  },
  components: {
    Navbar,
  },
  data() {

    return {
      letters: [
        {
          key: 1,
          'displayValue': 'A'
        },
        {
          key: 2,
          'displayValue': 'B'
        }
      ],
      numbers: [
        {
          key: 1,
          'displayValue': '1'
        },
        {
          key: 2,
          'displayValue': '2'
        }

      ],
      selectedLetter: -1,
      selectedNumber: -1

    }
  },
  methods: {
    onSelectChange(result: any) {
      console.log(result)
    }

  },


};
</script>

