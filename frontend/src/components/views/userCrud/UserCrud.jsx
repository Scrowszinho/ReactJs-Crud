import React from 'react';
import Main from '../../layout/Main';

const headProps = {
    title: 'Test',
    subTitle: 'Subtitle test',
    logo:'users'
}

export default () =>
    <Main {...headProps}>
        Register test
    </Main>