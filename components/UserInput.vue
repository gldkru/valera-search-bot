<template>
  <div>
    <form class="user-input" :class="{ active: inputActive }">
      <div
        ref="userInput"
        role="button"
        tabIndex="0"
        contentEditable="true"
        :placeholder="placeholder"
        class="user-input__text"
        @focus="setInputActive(true)"
        @blur="setInputActive(false)"
        @keydown="handleKey"
        @focusUserInput="focusUserInput()"
      ></div>
      <div class="user-input__buttons">
        <div class="user-input__button"></div>
        <div class="user-input__button">
          <UserInputButton @click.native.prevent="submitText">
            <IconSend />
          </UserInputButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserInputButton from '@/components/UserInputButton.vue'
import IconSend from '~/assets/images/send.svg?inline'

export default {
  components: {
    UserInputButton,
    IconSend
  },
  props: {
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      inputActive: false
    }
  },
  mounted() {
    if (this.$refs.userInput) {
      this.focusUserInput()
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
    ...mapActions(['addMessage']),
    setInputActive(onoff) {
      this.inputActive = onoff
    },
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this.submitText(event)
        event.preventDefault()
      }
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus()
      })
    },
    submitText(event) {
      const text = this.$refs.userInput.textContent

      if (text && text.length > 0 && !this.loading) {
        this.addMessage({
          text,
          me: true,
          type: 'text'
        })

        this.$refs.userInput.textContent = ''
      }
    }
  }
}
</script>

<style lang="scss">
.user-input {
  min-height: 55px;
  margin: 0px;
  position: relative;
  bottom: 0;
  display: flex;
  background-color: $bg-color-input;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &__text {
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
    padding: 1.5rem 5rem 1.5rem 1.5rem;
    font-size: $font-size;
    font-weight: 400;
    line-height: 1.33;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: $color-input;
    -webkit-font-smoothing: antialiased;
    max-height: 200px;
    overflow: scroll;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;

    &:empty:before {
      content: attr(placeholder);
      display: block; /* For Firefox */
      /* color: rgba(86, 88, 103, 0.3); */
      filter: contrast(15%);
      outline: none;
      cursor: text;
    }
  }

  &__button {
    position: absolute;
    right: 0;
    width: 5rem;
    text-align: center;
    height: 100%;
  }

  &.active {
    box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
  }
}

// .sc-user-input--buttons {
//   width: 100px;
//   position: absolute;
//   right: 30px;
//   height: 100%;
//   display: flex;
//   justify-content: flex-end;
// }

// .sc-user-input--button:first-of-type {
//   width: 40px;
// }

// .sc-user-input--button {
//   width: 30px;
//   height: 55px;
//   margin-left: 2px;
//   margin-right: 2px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }

// .sc-user-input.active {
//   box-shadow: none;
//   background-color: white;
//   box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
// }

// .sc-user-input--button label {
//   position: relative;
//   height: 24px;
//   padding-left: 3px;
//   cursor: pointer;
// }

// .sc-user-input--button label:hover path {
//   fill: rgba(86, 88, 103, 1);
// }

// .sc-user-input--button input {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   z-index: 99999;
//   height: 100%;
//   opacity: 0;
//   cursor: pointer;
//   overflow: hidden;
// }
</style>
