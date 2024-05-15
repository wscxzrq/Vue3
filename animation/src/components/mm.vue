<template>
  <section>
    <div>
      <slot></slot>
    </div>
  </section>
</template>


<script setup>
</script>


<style lang="scss" scoped>
section {
  perspective: 800px;
}
div {
  background-color: #16a085;
  padding: 10px 20px;
  animation: identifier 1s ease;
  transition: .5s;
  border-radius: .5rem;
  display: inline-block;
  color: #fff;
  cursor: pointer;
  &:hover {
    // transform: rotateY(360deg) rotateX(100deg);
    background-color: #f39c12;
  }
}
@keyframes identifier {
  from {
    transform: translateX(-5px);
  }
  20% {
    transform: translateX(5px);
  }
  20% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-5px);
  }
  to {
    transform: translate(0px);
  }
}
</style>
