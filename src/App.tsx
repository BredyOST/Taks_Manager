import React from 'react';
import Home from './pages/home/home';
import GlobalStyles from './app/styles/reset';
import { useAppSelector } from './app/redux/hooks/hooks';
import Portal from './shared/ui/portal/portal';
import SidePanel from './widgets/sidePanel/sidePanel';
import Modal from './shared/ui/modal/modal';
import AddTask from './widgets/addTask/addTask';
import Header from "./widgets/header/header";

function App() {

    const { activeTask, activeModalAddTask } = useAppSelector((state) => state.additionalIndicators);

    return (
        <>
            <GlobalStyles />
            <Header/>
            <Home />
            {activeTask && (
                <Portal whereToAdd={document.body}>
                    <SidePanel task={activeTask} />
                </Portal>
            )}
            {activeModalAddTask &&
            <Portal whereToAdd={document.body}>
                <Modal isActive={!!activeModalAddTask}>
                    <AddTask />
                </Modal>
            </Portal>
            }
        </>
    );
}

export default App;
