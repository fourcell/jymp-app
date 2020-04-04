<template>
  <van-nav-bar
    :title="columns.title"
    :left-text="columns.leftText"
    :right-text="columns.rightText"
    left-arrow
  >
    <template #left>
      <van-icon
        :name="columns.leftIconfont"
        :size="columns.size"
        :color="columns.color"
        @click="toReverse"
      />
    </template>
    <template #right>
      <van-icon
        :name="columns.rightIconfont"
        :size="columns.size"
        :color="columns.color"
        @click="toHome"
      />
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    columns: {
      type: [Object],
      default() {
        return {
          title: "标题",
          leftText: "",
          rightText: "",
          leftIconfont: "arrow-left",
          rightIconfont: "wap-home-o",
          size: "18",
          color: "#999",
          Home: () => {
            this.$router.push({ path: "/manage/home" });
          },
          Reverse: () => {
            this.$router.go(-1);
          }
        };
      },
      title: {
        type: [String],
        default() {
          return "标题";
        }
      },
      leftText: {
        type: [String],
        default() {
          return "";
        }
      },
      rightText: {
        type: [String],
        default() {
          return "";
        }
      },
      leftIconfont: {
        type: [String],
        default() {
          return "arrow-left";
        }
      },
      rightIconfont: {
        type: [String],
        default() {
          return "wap-home-o";
        }
      },
      size: {
        type: [String, Number],
        default() {
          return "18";
        }
      },
      color: {
        type: [String],
        default() {
          return "#999";
        }
      }
    }
  },
  methods: {
    toHome() {
      let _this = this
      this.columns.Home =
        this.columns.Home ||
        function(_this) {
          _this.$router.go(-1);
        };
      this.columns.Home(_this);
    },
    toReverse() {
      let _this = this
      this.columns.Reverse =
        this.columns.Reverse ||
        function(_this) {
          _this.$router.go(-1);
        };
      this.columns.Reverse(_this);
    }
  }
};
</script>