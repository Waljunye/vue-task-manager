Vue.component('like-button', {
    model: {
        prop: 'counter',
        event: 'on-counter-change',
    },
    props: ['counter'],
    template:
        "<span>" +
            "<button @click='increase'>" +
            "   &#9829; {{ counter }}" +
            "</button>" +
        "</span>",
    methods:{
        increase(){
            this.$emit('on-counter-change', this.counter + 1)
        }
    }
})
Vue.component('dislike-button', {
    model: {
        prop: 'counter',
        event: 'on-counter-change',
    },
    props: ['counter'],
    template:
        "<button @click='increase'>" +
        "   ФУ {{counter}}" +
        "</button>",
    methods: {
        increase: function (){
            this.$emit('on-counter-change', this.counter + 1)
        }
    }
})
Vue.component('task-list', {
    props: ['tasks', 'title'],
    template: `
    <div v-if="tasks.length != 0">
        <div class="list">
        <h2 v-if="title">{{ title }}:</h2>
            <div class="item" :class="{done: task.completed}" v-for="(task, index) in tasks" :key="task.text + index">
                <input type="checkbox" v-model="task.completed">
                {{ task.content }}
                <like-button v-model="task.likes"></like-button>
                <dislike-button v-model="task.dislikes"></dislike-button>
            </div>
        </div>
    </div>
    `,
})
let vm = new Vue({
    el: '#app',
    data: {
        headerDislikes: 0,
        headerLikes: 0,
        inputLikes: 0,
        inputDislikes: 0,
        inputPlaceholder: 'Имя задания!',
        tasksInput: "",
        tasks: [
            {content: 'Развернуть окружение в Codepen', completed: false, likes: 0, dislikes: 0},
            {content: 'Сделать что-то', completed: false, likes: 0, dislikes: 0},
            {content: 'Сделать интернет-магазин на Vue', completed: false, likes: 0, dislikes: 0}],
        img: "/src/img/61569c9b6f025f1bae21bc242c27e321.jpg"
    },
    methods: {
        addTask: function(){
            this.tasks.push({content: tasksInput, disabled: false, completed: false, likes: 0, dislikes: 0})
        },
    },
    computed: {
        getUncompletedTasksCount(){
            console.log('getUncompletedTasksCount')
            return this.tasks.filter(task => !task.completed).length;
        },
        uncompletedTasks(){
            console.log('uncompletedTasks')
            return this.tasks.filter(task => !task.completed)
        },
        completedTasks(){
            console.log('completedTasks')
            return this.tasks.filter(task => task.completed)
        },
        countLikes(){
            return this.headerLikes + this.inputLikes + this.tasks.reduce((value, task) => value + task.likes, 0)
        },
        countDislikes(){
            return this.headerDislikes + this.inputDislikes + this.tasks.reduce((value, task) => value + task.dislikes, 0)
        }
    }
})

