import * as React from "react";

export function useTitle(title: string) {
    React.useEffect(() => {
        document.title = title;
    }, []);
}
