<template>
  <div class="group-info">
    <div class="group-info_header">
      <div class="go-back" @click="openInfo">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="title">
        <div class="title-icon">
          <i class="fa-solid fa-credit-card"></i>
        </div>
        <label>Finanças</label>
      </div>
      <div class="blank-space">

      </div>
    </div>
    <div class="group-info_group">
      <div class="group-info_tabs">
        <ul>
          <li
            v-for="item in tabsList"
            :key="item.id"
            :class="isActiveTab(item.id) ? 'active' : ''"
            @click="setActiveTab(item.id)"
          >
            <!-- <img :src="require(`../assets/img/${item.id}.svg`)" alt="" /> -->
            <i :class="[ item.icon ]"></i>
            <label>{{ item.label }}</label>
          </li>
        </ul>
      </div>
      <div class="group-info_content">
        <transition name="slide-fade" mode="out-in">
          <div v-if="activeTab === 'people'" key="people">
            <GroupParticipants/>
          </div>
          <div v-if="activeTab === 'ranking'" key="ranking">
            <GroupRanking/>
          </div>
          <div v-if="activeTab === 'edit'" key="edit">
            <GroupEdit/>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import GroupParticipants from "../components/GroupParticipants.vue";
import GroupRanking from "../components/GroupRanking.vue";
import GroupEdit from "../components/GroupEdit.vue";

export default {
  components: {
    GroupParticipants,
    GroupRanking,
    GroupEdit,
  },
  data() {
    return {
      activeTab: "",
      tabsList: [
        { id: "people", label: "Participantes", icon: "fa-solid fa-people-group" },
        { id: "ranking", label: "Ranking", icon: "fa-solid fa-ranking-star" },
        { id: "edit", label: "Editar", icon: "fa-solid fa-pen" },
      ],
    };
  },
  created() {
    this.activeTab = this.tabsList[0].id;
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    },
    setActiveTab(id) {
      this.activeTab = id;
    },
    openInfo() {
      this.$emit("openInfo")
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/variables.less";

.group-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    background-color: @white;
    padding-left: @margin-desktop;
    padding-right: @margin-desktop;
    padding-top: calc(@height-header-desktop ~'+' 50px);

    &_header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0;

      .go-back {
        cursor: pointer;
        
        i {
          color: @gray;
          font-size: 20px;
        }
      }

      .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        &-icon {
          border: 2px solid @black;
          border-radius: 50%;
          margin-right: 20px;

          i {
            font-size: 20px;
            padding: 12px 11px;
          }
        }

        label {
          font-weight: 900;
          font-size: 22px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      }
    }

    &_group {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 30px;
      width: 100%;
    }

    &_tabs{
      ul {
        padding-right: 30px;
        border-right: 1px solid @gray;
        height: 100%;

        li {
          display: flex;
          align-items: center;
          padding: 20px 25px;
          margin-bottom: 15px;
          border-radius: 6px;
          cursor: pointer;

          i {
            margin-right: 15px;
            cursor: pointer;
          }

          label {
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0.1em;
            cursor: pointer;
          }
        }

        li:nth-child(3n+1).active {
          background-color: @lightBlue;
          color: @blue;
        }
        li:nth-child(3n+2).active {
          background-color: @lightGreen;
          color: @green;
        }
        li:nth-child(3n+3).active {
          background-color: @lightPurple;
          color: @purple;
        }
      }
    }

    @media (max-width: 480px) {
      &_group {
        grid-template-columns: 1fr;
      }

      &_tabs{
        ul {
          border-right: unset;
        }
      }
    }

    .slide-fade-enter-active {
      transition: all 0.5s;
    }

    .slide-fade-leave-active {
      transition: all 0.5s ease;
    } 

    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateX(-10px);
      opacity: 0;
    }
}
</style>