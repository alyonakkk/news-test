import { FC, Suspense } from "react";
import { Provider } from "react-redux";

import store from "@/shared/config/store";
import { LoaderFull } from "@/shared/ui/loader";

import { Router } from "./providers/router";
import ThemeProvider from "./providers/theme";

const App: FC<any> = ({ dataset }) => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Suspense fallback={<LoaderFull />}>
                    <Router />
                </Suspense>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
