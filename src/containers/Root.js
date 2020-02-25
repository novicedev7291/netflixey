import React from 'react';
import { Provider } from "react-redux";
import store, { persiststore } from "../store";
import DevTools from './DevTools';
import StyledContainer from '../styled/StyledContainer';
import GlobalStyle from '../injectGlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

const Root = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persiststore} loading={true}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <StyledContainer>
                        <BrowserRouter>
                            <App />
                            
                        </BrowserRouter>
                        <ToastContainer />
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default Root;