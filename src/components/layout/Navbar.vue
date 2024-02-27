<template>
    <f7-navbar :sliding="false">
        <f7-nav-left :back-link="this.backLink">
            <f7-link v-if="showDrawer" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"
                panel-open="#panel-nested"></f7-link>
            <f7-nav-title> {{ title }} </f7-nav-title>
        </f7-nav-left>
    </f7-navbar>
</template>

<script>
import { f7ready, f7 } from 'framework7-vue'

export default {
    name: "Navbar",
    props: {
        backLink: {
            default: false,
            type: Boolean
        },
        showDrawer: {
            default: false,
            type: Boolean
        },
        title: {
            default: "",
            type: String
        }
    },

    mounted() {
        f7ready(() => {

        })
    }
}
</script>

<style scoped></style>