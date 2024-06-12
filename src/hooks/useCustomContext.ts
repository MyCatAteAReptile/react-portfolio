import { Context, useContext } from "react";

const useSafeContext = <T>(context: Context<T>) => {
    const currentContext = useContext<T>(context);

    if (!currentContext) {
        throw new Error(
            "Нет контекста для useContext. useContext должен использоваться в пределах Context.Provider"
        );
    }

    return currentContext;
};

export default useSafeContext;