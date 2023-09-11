const sliceArrayMixin = {
  computed: {
    itemArrayMaxOfThreeElements() {
      return this.itemArray.slice(0, 3);
    },
  },
};

export default sliceArrayMixin;
