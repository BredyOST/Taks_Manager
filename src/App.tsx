import React from 'react';
import GlobalStyles from './app/styles/reset';
import { useAppSelector } from './app/redux/hooks/hooks';
import Portal from './shared/ui/portal/portal';
import SidePanel from './widgets/sidePanel/sidePanel';
import Modal from './shared/ui/modal/modal';
import AddTask from './widgets/addTask/addTask';
import Header from './widgets/header/header';
import { ROUTES_REGISTERED } from './app/routes/routes';
import { Route, Routes } from 'react-router-dom';
import { HomeContainer } from './app/styles/variable/globalStyled';

function App() {
    const { activeTask, activeModalAddTask } = useAppSelector((state) => state.additionalIndicators);

    return (
        <>
            <GlobalStyles />
            <Header />
            <HomeContainer>
                <Routes>
                    {ROUTES_REGISTERED.length > 0 &&
                        ROUTES_REGISTERED.map((item) => (
                            <Route key={item.id} path={item.path} element={item.element}>
                                {item.label}
                            </Route>
                        ))}
                </Routes>
            </HomeContainer>
            {activeTask && (
                <Portal whereToAdd={document.body}>
                    <SidePanel task={activeTask} />
                </Portal>
            )}
            {activeModalAddTask && (
                <Portal whereToAdd={document.body}>
                    <Modal isActive={!!activeModalAddTask}>
                        <AddTask />
                    </Modal>
                </Portal>
            )}
        </>
    );
}

export default App;
