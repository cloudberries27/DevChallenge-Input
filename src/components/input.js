import React from "react";

export default function Input(props){
    const error = props.error ? "error" : "";
    const value = props.value ? props.value : "";
    const disabled = props.disabled ? true : false;
    const helperText = props.helperText ? props.helperText : "";
    const size = props.size ? props.size : "";
    const fullWidth = props.fullWidth ? "fullWidth" : "";
    const end = props.endIcon ? "end" : "";
    return(
        (!props.multiline ?
        <div id="input-box" className={`${error}${end}`}>
            <label for="input">Label</label>
            {props.startIcon ? <span class="material-icons start">{props.startIcon}</span> : <></>}
            <input className={`${size}${fullWidth}`} id="input" type="text" disabled={disabled} placeholder="Placeholder" value={value}/>
            {props.endIcon ? <span class="material-icons end">{props.endIcon}</span> : <></>}
            <p className="helper">{helperText}</p>
        </div> :
        <div id="input-box">
            <label className={`${error}`} for="input">Label</label>
            <textarea className={`${error}${size}${fullWidth}`} id="input" disabled={disabled} placeholder="Placeholder" rows={props.row}/>
        </div>
        )
    )
}