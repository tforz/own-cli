import * as React from "react";

import { Dispatch } from "../store";

interface Option {
    value?: string,
    tip?: string,
    validate?: (val: string) => boolean,
    length?: { max?: number }
}

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(option?: Option) {
    const [value, set] = React.useState(option && option.value ? option.value : "");

    const onChange = (event: React.ChangeEvent<T>) => setValue(event.target.value);

    const setValue = (value: string) => {
        if (option?.length?.max) {
            set(value.slice(0, option?.length?.max));
        } else {
            set(value);
        }
    }

    const validate = () => {
        if (option && option.validate) {
            if (!option.tip) { throw new Error("undefined"); }
            if (!option.validate(value)) {
                Dispatch.toast.show(option.tip);
                return false;
            } else {
                return true;
            }
        }
        return true;
    };

    const bind = () => ({ value, onChange });

    return { value, setValue, validate, bind };
}
