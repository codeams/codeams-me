<template>
  <div class='loader'>
    <div class='dot' :style='{ animationDuration: duration }'></div>
    <div class='dot' :style='{ animationDuration: duration }'></div>
  </div>
</template>

<script>
import randomNumberInRange from '@/functions/random-number-in-range'

export default {
  computed: {
    duration () {
      const minDuration = 3000
      const maxDuration = 5000
      const duration = randomNumberInRange(minDuration, maxDuration)
      return duration + 'ms'
    }
  }
}
</script>


<style lang='scss'>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  
  width: 200px;
  height: 200px;
  
  margin-top: -100px;
  margin-left: -100px;
}

.dot {
  transform: scale(2.5);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;

  width: 160px;
  height: 100px;
  
  margin-top: -50px;
  margin-left: -80px;

  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.03);

  transform-type: preserve-3d;

  animation: dot 3s cubic-bezier(.55,.3,.24,.99) infinite;
}

.dot:nth-child(2) {
  z-index: 11;
  
  width: 150px;
  height: 90px;
  
  margin-top: -45px;
  margin-left: -75px;
  
  border-radius: 3px;
  
  background-color: rgba(255, 255, 255, 0.03);
  
  animation-name: dot2;
}

@keyframes dot {
  3%, 97% {
    width: 160px;
    height: 100px;

    margin-top: -50px;
    margin-left: -80px;
  }
  30%, 36% {
    width: 80px;
    height: 120px;

    margin-top: -60px;
    margin-left: -40px;
  }
  63%, 69% {
    width: 40px;
    height: 80px;

    margin-top: -40px;
    margin-left: -20px;
  }
}

@keyframes dot2 {
  3%, 97% {
    width: 150px;
    height: 90px;

    margin-top: -45px;
    margin-left: -75px;
  }
  30%, 36% {
    width: 70px;
    height: 96px;

    margin-top: -48px;
    margin-left: -35px;
  }
  63%, 69% {
    width: 32px;
    height: 60px;

    margin-top: -30px;
    margin-left: -16px;
  }
}
</style>
