import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Business Template`;
    }, [title])
};

export default useTitle;