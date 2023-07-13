<template>
  <title-section />
  <grid-section />
  <top-selling-products-section />
</template>

<script>
import TitleSection from '@/components/title-section/TitleSection.vue'
import GridSection from '@/components/grid-section/GridSection.vue'
import TopSellingProductsSection from '@/components/top-selling-products-section/TopSellingProductsSection.vue'

export default {
  components: { TitleSection, GridSection, TopSellingProductsSection },
}
</script>
