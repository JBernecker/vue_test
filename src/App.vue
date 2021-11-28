<template>
  <div>
    <VSystemBar/>
    <ToolBar/>
    <NavigationDrawer/>
    <router-view/>
    <Footer/>
    <BottomNavigation/>
  </div>
</template>

<script>
  import VSystemBar from '@/components/VSystemBar'
  import ToolBar from '@/components/ToolBar'
  import NavigationDrawer from '@/components/NavigationDrawer'
  import Footer from '@/components/Footer'
  import BottomNavigation from '@/components/BottomNavigation'

  export default {
    name: 'Home',

    components: {
      VSystemBar,
      ToolBar,
      NavigationDrawer,
      Footer,
      BottomNavigation,
    },
  }
</script>
