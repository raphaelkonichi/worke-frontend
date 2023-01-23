<template>
  <div class="employees">
    <EmployeesHeader @openEmployeeInfo="openEmployeeInfo"/>
    <EmployeesTable @openEmployeeInfo="openEmployeeInfo"/>
    <EmployeesInfo @openEmployeeInfo="openEmployeeInfo" v-if="isInfo"/>
  </div>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable.vue";
import EmployeesHeader from "../components/EmployeesHeader.vue";
import EmployeesInfo from "../components/EmployeesInfo.vue";

export default {
    components: {
        EmployeesTable,
        EmployeesHeader,
        EmployeesInfo,
    },
    data() {
        return {
            isInfo: false
        };
    },
    created() {
        this.hasMenu();
    },
    computed: {},
    methods: {
        hasMenu() {
            this.$emit("hasMenu");
        },
        openEmployeeInfo() {
            return (this.isInfo = !this.isInfo);
        },
    },
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.employees {
  margin-top: 150px;
  padding: 30px @margin-desktop;
}

</style>