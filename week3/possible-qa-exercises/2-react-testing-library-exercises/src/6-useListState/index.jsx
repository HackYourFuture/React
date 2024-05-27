import { useState } from 'react'

/**
 * I am sure you have built apps with lists and in the component that displays
 * the list had certain clicks mess with arrays. In these cases this logic of
 * filtering the list, adding an element is always the same.
 *
 * Time to create a hook that handles this logic so that you don't have to
 * rewrite this in every component
 */
function useListState(initialList = []) {
    const [list, setList] = useState(initialList)

    const addElement = (element) => {
        setList([...list, element])
    }

    const removeElementWithId = (id) => {
        setList(list.filter((element) => element.id !== id))
    }

    return { list, addElement, removeElementWithId }
}

export default useListState
