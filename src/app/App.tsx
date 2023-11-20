import { FC, Suspense } from "react";
import { Provider } from "react-redux";

import store from "@/shared/config/store";
import { LoaderFull } from "@/shared/ui/loader";

import { Router } from "./providers/router";
import ThemeProvider from "./providers/theme";
import { HelmetProvider } from "react-helmet-async";

const App: FC<any> = ({ dataset }) => {
    return (
        <HelmetProvider>
            <Provider store={store}>
                <ThemeProvider>
                    <Suspense fallback={<LoaderFull />}>
                        <Router />
                    </Suspense>
                </ThemeProvider>
            </Provider>
        </HelmetProvider>
    );
};

export default App;
