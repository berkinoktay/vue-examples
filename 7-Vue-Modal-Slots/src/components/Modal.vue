<template>
<div class="modal">
  <div class="header">
    <slot name="header"/>
  </div>
  <hr/>
  <div class="content">
    <slot name="content"/>  </div>
  <hr/>
  <div class="footer">
    <slot name="footer"/>
  </div>
</div>
</template>

<script>
export default {
}
</script>
