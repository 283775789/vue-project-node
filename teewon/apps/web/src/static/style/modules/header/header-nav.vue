<template>
  <ul class="tw-nav xheader xhorizontal">
    <li>
      <router-link class="xactive" to="/url1"><i class="tw-ico xname"></i><span>导航1</span></router-link>
    </li>
    <li>
      <router-link to="/url2"><i class="tw-ico xname"></i><span>导航2</span></router-link>
    </li>
    <li>
      <router-link to="/url3"><i class="tw-ico xname"></i><span>导航3</span></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'twHeaderNav'
}
</script>
