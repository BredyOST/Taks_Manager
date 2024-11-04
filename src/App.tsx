import React from 'react';
import Home from './pages/home/home';
import GlobalStyles from './app/styles/reset';
import {useAppSelector} from "./app/redux/hooks/hooks";
import Portal from "./shared/ui/portal/portal";
import SidePanel from "./widgets/sidePanel/sidePanel";

function App() {

    const {activeTask} = useAppSelector(state => state.activeTaskForPortal)

    return (
        <>
            <GlobalStyles />
            <Home />
            {activeTask &&
                <Portal whereToAdd={document.body}>
                    <SidePanel task={activeTask}/>
                </Portal>
            }
        </>
    );
}

export default App;
