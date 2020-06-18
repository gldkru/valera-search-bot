<template>
  <div>
    <!-- Страница сверстана исключительно для демонстрации  -->
    <div class="presentation">
      <div class="presentation__box">
        <div class="phone-box">
          <div class="marvel-device iphone-x">
            <div class="notch">
              <div class="camera"></div>
              <div class="speaker"></div>
            </div>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="bottom-bar"></div>
            <div class="volume"></div>
            <div class="overflow">
              <div class="shadow shadow--tr"></div>
              <div class="shadow shadow--tl"></div>
              <div class="shadow shadow--br"></div>
              <div class="shadow shadow--bl"></div>
            </div>
            <div class="inner-shadow"></div>
            <div class="screen">
              <!-- Компонент чата -->
              <chat-window class="phone" />
              <!--  -->
            </div>
          </div>
        </div>
      </div>
      <div class="presentation__box">
        <div class="presentation__content">
          <vue-markdown>{{ readme }}</vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import readme from '@/README.md'
import ChatWindow from '@/components/ChatWindow'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    ChatWindow,
    VueMarkdown
  },
  data() {
    return {
      readme
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/device.min.css';

.presentation {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: $font-size;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

  @media screen and (min-width: 1025px) {
    flex-direction: row;
  }

  &__box {
    width: 100%;

    @media screen and (min-width: 769px) {
      width: auto;
      margin: 2rem;
    }
  }

  &__content {
    margin: 0 auto;
    background-color: #fff;
    line-height: 1.6;
    padding: 0.5rem 1rem;

    @media screen and (min-width: 421px) {
      padding: 1rem 2rem;
    }

    @media screen and (min-width: 769px) {
      max-width: 800px;
      line-height: 1.8;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
      padding: 2rem 4rem;
    }
  }
}

.phone {
  width: 100%;
  height: 100%;
  /* Челка */
  padding-top: 30px;
}

hr {
  border: none;
  border-bottom: 1px solid $color-border;
}

code {
  display: block;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
}

.marvel-device {
  display: block;
  margin: 0 auto;
}

//@at-root
.phone-box {
  transform: scale(0.6);
  position: relative;
  height: 600px;

  @media screen and (max-width: 425px) {
    .marvel-device {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  }

  @media screen and (min-width: 426px) {
    transform: scale(0.9);
    height: auto;
  }

  @media screen and (min-width: 769px) {
    transform: scale(1);
  }
}
</style>
