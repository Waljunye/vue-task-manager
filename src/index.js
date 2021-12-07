Vue.component('todo-list', {
    props: ['tasks', 'inputPlaceholder', 'inputMessage'],
    data: function(){
        return {
            tasksInput: "",
            tasksCont: this.tasks.length,
        }
    },
    template:
        '<div>' +
            '<div>Осталось сделать задач: <span class="counter">{{ this.tasksCont }}</span></div>'+
            '<div class="list">\n' +
            '        <div class="item" v-for="task in tasks">\n' +
            '            <input type="checkbox" :disabled="task.disabled" @click="completeTask(task)">\n' +
            '            {{ task.content}}\n' +
            '        </div>\n' +
            '    </div>' +
            '<div class="form">\n' +
            '        <input :placeholder="inputPlaceholder" :title="inputMessage" v-model="this.tasksInput">\n' +
            '        <button type="button" v-on:click="this.addTask">Добавить</button>\n' +
            '    </div>' +
        '</div>',
    methods: {
        addTask: function(){
            this.tasks.push({content: tasksInput, disabled: false})
            this.tasksCont++;
        },
        completeTask: function (task){
            console.log(task.completed)
            if(task.completed){
                this.tasksCont++;
            }else{
                this.tasksCont--;
            }
            task.completed = !task.completed;

        }
    }
    },
)

var vm = new Vue({
    el: '#app',
    data: {
        inputPlaceholder: 'Имя задания!',
        message: "Введите имя задания",
        taskButtonType: 'checkbox',
        tasks: [{content: 'Развернуть окружение в Codepen', disabled: false, completed: false},
            {content: 'Сделать что-то', disabled: false, completed: false},
            {content: 'Сделать интернет-магазин на Vue', disabled: false, completed: false}]
    }
})