export default function propertyName(name: string, deviceType: string) {
    deviceType = deviceType.toLowerCase();

    switch (deviceType) {
        case 'tablet':
        case 'mobile':
            return deviceType + name.charAt(0).toUpperCase() + name.substring(1);
    }
    return name;
}