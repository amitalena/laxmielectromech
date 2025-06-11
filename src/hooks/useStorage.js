const useStorage = () => {
    const set = (keyName, store) => localStorage.setItem(keyName, JSON.stringify(store));

    const get = (keyName) => JSON.parse(localStorage.getItem(keyName));

    const find = (keyName) => localStorage.getItem(keyName) ? true: false;

    const remove = (keyName) => localStorage.removeItem(keyName);

    const clear = () => localStorage.clear();

    return {
        set,
        get,
        find,
        remove,
        clear
    }
}

export default useStorage;