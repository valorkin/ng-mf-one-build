import { LoadRemoteModuleOptions } from '../../federation-utils';

export type PluginOptions = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
    // url short tag to resolve this component in routing
    tag?: string;
};


