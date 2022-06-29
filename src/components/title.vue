<template>
<div class="title">
    <h1>派車系統：{{msg}}</h1>
</div>

</template>

<script>

    export default{
        name: 'TitleBar',
        props: {
            msg: String
        }
    }

</script>