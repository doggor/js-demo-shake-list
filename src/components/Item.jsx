import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItemText } from "../store/list/actions";
import { itemHeight, itemMargin } from "../const";
import find from "lodash.find";
import "./Item.scss";

export default function Item({ id }) {
    const colors = useSelector(state => state.colors);
    const { position, text } = useSelector(state => find(state.list, { id }));

    const bgColor = colors[id % colors.length];

    const dispatch = useDispatch();

    const inlineStyle = useMemo(
        () => ({
            transform: `translateY(${position * (itemHeight + itemMargin)}px)`,
        }),
        [position]
    );

    const onTextChange = useCallback(
        evt => {
            dispatch(setItemText(id, evt.target.value));
        },
        [dispatch, id]
    );

    return (
        <label className={`item ${bgColor}`} style={inlineStyle}>
            <input type="text" value={text} onChange={onTextChange} />
        </label>
    );
}
