import types from "./types";
import initState from "./state";

export default function(state = initState(), action) {
    switch (action.type) {
        case types.RESET_COLORS:
            return initState();
        default:
            return state;
    }
}
