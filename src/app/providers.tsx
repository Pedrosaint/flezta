'use client';

import { Provider } from 'react-redux';
import store from '../core/redux/stores/store';

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;