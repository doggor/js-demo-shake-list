import initState from "./state";
import types from "./types";
import shuffle from "lodash.shuffle";
import findIndex from "lodash.findindex";
import cloneDeep from "lodash.clonedeep";

export default function(state = initState(), action) {
    switch (action.type) {
        case types.ADD_ITEM:
            const id = state.length ? Math.max(...state.map(item => item.id)) + 1 : 0;
            const position = state.length ? Math.max(...state.map(item => item.position)) + 1 : 0;
            return [...state, { id, position, text: "" }];
        case types.SHUFFLE_ITEMS:
            const newOrders = shuffle(state);
            return state
                .filter(({ text }) => !!text)
                .map((item, index) => ({
                    ...item,
                    position: newOrders[index].position,
                }));
        case types.RESET_ITEMS:
            return initState();
        case types.SET_ITEM_TEXT:
            const setItemIndex = findIndex(state, { id: action.data.id });
            if (setItemIndex > -1) {
                const newState = cloneDeep(state);
                newState[setItemIndex].text = action.data.text;
                return newState;
            }
            else {
                return state;
            }
        default:
            return state;
    }
}
