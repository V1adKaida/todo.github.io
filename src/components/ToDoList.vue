<template>
  <div class="center">
    <div class="card">
      <div class="header">
        <div class="title">
          ToDo
        </div>
        <div class="avatar">

          <div class="person">
            <div class="name" v-if="userName">{{ userName }}</div>
            <div class="image">
              <img v-if="image" :src="image" alt="">
              <font-awesome-icon v-else icon="fas fa-user-alt" />
            </div>
          </div>
          <div class="drop-down">
            <div @click.stop="singout">Logout</div>
          </div>

        </div>
      </div>

      <div class="form-group">
        <input class="main" type="text" v-model="newToDo" @keyup.enter="addNewToDo(newToDo)">
        <button @click="addNewToDo(newToDo)">
          <font-awesome-icon icon="fa-solid fa-arrow-right " />
        </button>
      </div>

      <draggable class="todo-list" :list="todos" @change="draggable" item-key="id" handle=".drag" ghost-class="ghost">
        <template #item="{ element }">
          <div class="todo-list__item" :class="{ 'complate': element.complate }">
            <div>
              <div class="drag">
                <font-awesome-icon icon="fas fa-ellipsis-v" />
              </div>
              <label class="checkbox">
                <input type="checkbox" @click="complate(element.id, element.complate)" v-model="element.complate">
                <span class="checkbox--tick"></span>
              </label>
              <contenteditable class="name" tag="div" :contenteditable="true" v-model.trim="element.name"
                @click.once="notify" :no-nl="true" :no-html="true" @returned="editName(element.name, element.id)" />
            </div>
            <div>
              <div class="date">
                {{ element.day }} {{ element.mounth }}
              </div>
              <button @click="remove(element.id)" class="icon">
                <font-awesome-icon icon="fas fa-trash-alt " />
              </button>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import { getDatabase, set, remove, ref, update, onValue } from "firebase/database";
import { mapState } from 'vuex';
import contenteditable from 'vue-contenteditable'
import draggable from 'vuedraggable'

export default {
  name: 'ToDoList',
  components: {
    contenteditable, draggable
  },
  data() {
    return {
      todos: [],
      newToDo: '',
    }
  },

  computed: {
    ...mapState({
      userName: state => state.userData.displayName,
      image: state => state.userData.photoURL,
      userId: state => state.userData.uid
    })

  },

  methods: {
    async addNewToDo(name) {
      if (!this.newToDo) {
        return
      }
      const id = typeof this.todos[0] !== 'undefined' ? this.todos[this.todos.length - 1].id + 1 : 0
      const date = new Date()
      const mounth = date.toLocaleString('default', { month: 'long' })
      const day = date.getDate()

      const db = getDatabase();
      const todosData = {
        name: name,
        id: id,
        complate: false,
        day: day,
        mounth: mounth
      };
      await set(ref(db, `todos/${this.userId}/${id}`), todosData)
      this.newToDo = ''
    },

    async draggable() {
      this.todos.forEach((item, index) => {
        item.id = index
      })

      const db = getDatabase()
      const updates = {}
      updates[`todos/${this.userId}/`] = this.todos
      await update(ref(db), updates)
    },

    async editName(name, id) {
      const db = getDatabase()
      const updates = {}
      updates[`todos/${this.userId}/${id}/name/`] = name
      await update(ref(db), updates)
    },

    async complate(todosToComplate, complate) {
      const db = getDatabase()
      const updates = {}
      updates[`todos/${this.userId}/${todosToComplate}/complate/`] = !complate
      await update(ref(db), updates)
    },

    async remove(todosToRemove) {
      const db = getDatabase()
      await remove(ref(db, `todos/${this.userId}/${todosToRemove}`))
    },

    singout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'auth' })
      })
    },

    notify() {
      this.$notify({ title: 'Press enter to edit', type: 'succes', position: 'top center', duration: '10000' });
    },

    async realFetch() {
      const db = getDatabase();
      const starCountRef = ref(db, `todos/${this.userId}`);
      await onValue(starCountRef, (snapshot) => {
        if (snapshot.val()) {
          const data = Object.values(snapshot.val())
          this.todos = data
        } else {
          this.todos = []
          this.$notify({ title: 'No data available', type: 'warn', ignoreDuplicates: true });
        }
      });
    }
  },

  beforeUpdate() {
    this.realFetch()
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
}

.card {
  max-width: 1000px;
  width: 100%;
  background: #fff;
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 767px) {
    margin: auto;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    .avatar {
      position: relative;
      cursor: pointer;

      .person {
        display: flex;
        align-items: center;

        .image {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          overflow: hidden;
          margin-left: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid grey;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }

      &:hover {
        .drop-down {
          opacity: 1;
        }
      }

      .drop-down {
        position: absolute;
        width: 150px;
        top: 100%;
        right: 0;
        background: #fff;
        border-radius: 16px;
        box-shadow: 0px 0px 10px 2px rgba(#000, .1);
        z-index: 1;
        opacity: 0;
        transition: 0.2s;

        div {
          padding: 8px 16px;
          color: #000;
        }

      }
    }
  }

  .title {
    font-size: 36px;
  }
}

.todo-list {
  position: relative;
  transition: .2s ease-out;
  transition-duration: 1s;
  margin-top: 24px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
    padding: 8px 0;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #000;

    >div {
      display: flex;
      align-items: center;
      width: 50%;

      &:last-child {
        justify-content: flex-end;
      }
    }

    .drag {
      width: 24px;
      text-align: center;
      margin-right: 12px;
      cursor: grab
    }

    &.sortable-chosen {
      .drag {
        cursor: grabbing
      }
    }

    &.sortable-drag,.sortable-fallback {
      opacity: 1 !important;
    }

    &.ghost {
      opacity: 0;
    }

    .name {
      font-size: 16px;
      position: relative;
      padding: 4px 8px;
      border: 1px solid transparent;
      word-break: break-word;
      transition: 0.2s;
      border-radius: 6px;
      transition: 0.2s;

      &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        background: green;
        transition: 0.3s;
        left: 4px;
        top: 50%;
        transform: translateY(-50%);
      }

      &:hover {
        border-color: grey
      }
    }

    .date {
      margin-right: 8px;
      font-size: 14px;
      line-height: 1;
    }

    &.complate {
      .name {
        &:after {
          width: calc(100% - 8px);
        }
      }
    }

  }
}

.icon {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  transition: 0.2s;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: lightgrey;
  }
}

.form-group {
  position: relative;

  input {
    width: 100%;
    height: 48px;
    border: 1px solid #cad1d7;
    border-radius: 8px;
    color: #000;

    &.main {
      border: none;
      border-bottom: 2px solid #b45ba0;
      border-radius: 0;
      color: #b45ba0;
      font-weight: 600;
      font-size: 24px;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 47px;
    width: 48px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}

.checkbox {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  line-height: 0;
  user-select: none;
  transition: all 0.2s ease;
  margin-right: 16px;

  &--tick {
    display: inline-block;
    height: 24px;
    width: 24px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:after {
      content: '';
      position: absolute;
      display: none;
      transition: all 0.2s ease;
      left: 8px;
      top: 3px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  &:hover input~.checkbox--tick {
    background-color: rgba(0, 119, 255, 0.06);
    border-color: #07f;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked~.checkbox--tick {
      background-color: #07f;
      border-color: #07f;
    }

    &:checked~.checkbox--tick:after {
      display: block;
    }
  }
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>