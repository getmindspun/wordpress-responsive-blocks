import {useGetPreviewDeviceType} from '../../hooks';
import React from 'react';

const DeviceTypeContainer = (props: {
    deviceType: string
    children: React.ReactNode
}) => {
    const deviceType = useGetPreviewDeviceType();

    if (deviceType.toLowerCase() !== props.deviceType.toLowerCase()) {
        return null;
    }

    return (
        <>
            {props.children}
        </>
    );
}

export default DeviceTypeContainer;
