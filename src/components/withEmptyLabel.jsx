export function withEmptyLabel(Component, listName = null) {

    return function ({ items }) {
        if (!items || items.length === 0) {
            return <p>List {listName && <>of {listName}</>} is empty!</p>
        }
        return <Component items={items} />
    }
}