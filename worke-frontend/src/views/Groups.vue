<template>
  <div class="groups">
    <GroupTitle/>
    <GroupCards @openInfo="openInfo"/>
    <AddButton @openModal="openModal"/>
    <CreateGroupModal v-if="showModal" @openModal="openModal"/>
    <GroupInfo @openInfo="openInfo" v-if="isInfoOpen"/>
  </div>
</template>

<script>
import GroupTitle from "../components/GroupTitle.vue";
import GroupCards from "../components/GroupCards.vue";
import AddButton from "../components/AddButton.vue";
import CreateGroupModal from "../components/CreateGroupModal.vue";
import GroupInfo from "../components/GroupInfo.vue";

export default {
    name: 'Groups',
    components: {
        GroupTitle,
        GroupCards,
        AddButton,
        CreateGroupModal,
        GroupInfo,
    },
    data() {
        return {
            showModal: false,
            isInfoOpen: false,
        }
    },
    created() {
        this.hasMenu();
    },
    computed: {},
    methods: {
        hasMenu() {
            this.$emit("hasMenu");
        },
        openModal() {
            return (this.showModal = !this.showModal);
        },
        openInfo() {
            return (this.isInfoOpen = !this.isInfoOpen);
        },
    },
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.groups {
  margin-top: 150px;
  padding: 30px @margin-desktop;
}

</style>