import { KubeConfig, Core_v1Api } from '@kubernetes/client-node';

const kc = new KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(Core_v1Api);

k8sApi.listNamespacedPod('default')
    .then(res => {
        console.log(res.body);
    });
