import * as React from 'react';
import Loading from '../../components/Loading/index';
import Loadable from 'react-loadable';

const LoadAbleComponent = Loadable({
    loader: () => import('./About'),
    loading: Loading,
});

export default LoadAbleComponent;

