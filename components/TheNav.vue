<template>
    <div>
        <ul class="menu">
            <li>
                <NuxtLink to="/problemas"> Problemas </NuxtLink>
            </li>
            <li>
                <span>Mis problemas</span>
            </li>
        </ul>
    </div>
</template>

<style>
    .menu{
        list-style: none;
        padding: 8px 0; margin: 0;
    }
    .menu li{
        display: inline-block;
    }
    .menu a{
        color: #00A8CD;
        text-decoration: none;
    }
    .menu a:after{
        content: '';
        background: url('~assets//images/icn-derecha.png');
        background-size: contain;
        width: 18px;
        height: 18px;
        display: inline-block;
        vertical-align: text-bottom;
    }
    .menu span{
        color: #585056;
    }
</style>