import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, shuffleItems, resetItems } from "../store/list/actions";
import { resetColors } from "../store/colors/actions";
import { itemHeight, itemMargin, controlsHeight } from "../const";
import Item from "./Item";
import "./App.scss";

export default function App() {
    const dispatch = useDispatch();

    const list = useSelector(state => state.list);

    const shakable = list.filter(({ text }) => !!text).length > 0;

    const inlineStyle = {
        height: `${list.length * (itemHeight + itemMargin) + itemMargin + controlsHeight}px`,
    };

    const onResetItem = useCallback(() => {
        dispatch(resetItems());
        dispatch(resetColors());
    }, [dispatch]);

    const onShake = useCallback(() => {
        dispatch(shuffleItems());
    }, [dispatch]);

    const onAddItem = useCallback(() => {
        dispatch(addItem());
    }, [dispatch]);

    return (
        <React.Fragment>
            <div id="frame" style={inlineStyle}>
                {list.map(({ id }) => (
                    <Item key={id} id={id} />
                ))}
            </div>
            <div id="controls">
                <button id="reset-item-btn" className="small-btn" onClick={onResetItem}>
                    Reset
                </button>
                <button id="shuffle-btn" className="big-btn" onClick={onShake} disabled={!shakable}>
                    Shake
                </button>
                <button id="add-item-btn" className="small-btn" onClick={onAddItem}>
                    Add
                </button>
            </div>
        </React.Fragment>
    );
}
