<template>
    <div>

    
        <h2>
            Info about the To Do List here
        </h2>
        <p>
            The list of completed To Do tasks is
        </p>
        <ul>
            <li v:for = "doneTodo in doneTodos">
                {{ `The ${doneTodo.text} task with ID ${doneTodo.id} is done` }}
            </li>
        </ul>
        <p>
            {{ `The Number of To Do Tasks Completed is ${doneTodosCount}` }}
        </p>
    </div>
</template>

<script>
    export default {
        computed:{
            doneTodos() {
            return this.$store.getters.doneTodos
            },
            doneTodosCount() {
                return this.$store.getters.doneTodosCount
            }
        }
    }
</script>