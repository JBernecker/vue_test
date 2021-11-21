<template>
  <div>
    <VSystemBar/>
    <AppBar/>
    <NavigationDrawer/>
    <Content/>
    <Footer/>
    <BottomNavigation/>
  </div>
</template>

<script>
  import VSystemBar from '../components/VSystemBar'
  import AppBar from '../components/AppBar'
  import NavigationDrawer from '../components/NavigationDrawer'
  import Content from '../components/Content'
  import Footer from '../components/Footer'
  import BottomNavigation from '../components/BottomNavigation'

  export default {
    name: 'Home',

    components: {
      VSystemBar,
      AppBar,
      NavigationDrawer,
      Content,
      Footer,
      BottomNavigation,
    },
  }
</script>
