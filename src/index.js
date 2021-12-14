Vue.component('todo-list', {
    props: ['placeholder', 'tasks', 'message'],
    data: function(){
        return {
            tasksInput: "",
            completed: false,
            img: "/src/img/61569c9b6f025f1bae21bc242c27e321.jpg"
        }
    },
    template:
        '<div>' +
            '<div v-if="!count()"> Ты выплонил все задачи!</div>' +
            '<div v-else-if="count() == 1"> Почти получилось, продолжай в том же духе</div>' +
            '<div v-else-if="count() == 2"> У тебя ещё есть над чем работать. Продолжай!</div>' +
            '<div v-else>Осталось сделать задач: <span class="counter">{{ count() }}</span></div>'+
            '<div class="list">\n' +
            '        <div class="item" v-for="task in tasks">\n' +
            '            <input type="checkbox" :disabled="task.disabled" v-model="task.completed">\n' +
            '            <span :class="{done: task.completed}">{{ task.content}}\n</span>' +
            '        </div>\n' +
            '    </div>' +
            '<div class="form">\n' +
            '        <input :placeholder="placeholder" :title="message" v-model="this.tasksInput">\n' +
            '        <button type="button" v-on:click="this.addTask">Добавить</button>\n' +
            '    </div>' +
            '<transition name="fade"><img :src="this.img" alt="Robert Downey Jr congrats you" v-show="count() == 0"> </transition>' +
        '</div>',
    methods: {
        addTask: function(){
            this.tasks.push({content: tasksInput, disabled: false})
        },
        count: function (){
            return this.tasks.filter(task => !task.completed).length;
        }
    }
    },
)

let vm = new Vue({
    el: '#app',
    data: {
        inputPlaceholder: 'Имя задания!',
        message: 'Здесь должно быть имя задания, которое ты должен будешь выполнить',
        tasks: [{content: 'Развернуть окружение в Codepen', disabled: false, completed: false},
            {content: 'Сделать что-то', disabled: false, completed: false},
            {content: 'Сделать интернет-магазин на Vue', disabled: false, completed: false}]
    }
})