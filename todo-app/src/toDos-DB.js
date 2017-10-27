export let ToDos=[
    {
        todoDesc: "Get Out of Bed",
        toDoStatus: "Done"
    },
    {
        todoDesc: "Brush Teeth",
        toDoStatus: "Not Done"
    },
    {
        todoDesc: "Eat Breakfast",
        toDoStatus: "Not Done"
    }
]

export default function updateStatus(index, status) {
    ToDos[index].toDoStatus = status
}