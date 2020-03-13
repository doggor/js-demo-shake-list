import types from "./types";

export function addItem() {
    return {
        type: types.ADD_ITEM,
    };
}

export function shuffleItems() {
    return {
        type: types.SHUFFLE_ITEMS,
    };
}

export function resetItems() {
    return {
        type: types.RESET_ITEMS,
    };
}

export function setItemText(id, text) {
    return {
        type: types.SET_ITEM_TEXT,
        data: {
            id,
            text,
        },
    };
}
