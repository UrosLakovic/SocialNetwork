<template>
    <div>
        <header-component/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header';


export default {
    name: "App",
    components: {
        HeaderComponent: Header
    }
}
</script>