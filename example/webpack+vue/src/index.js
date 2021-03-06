import Vue from 'vue';
import MotorViewer from './components/MotorViewer.vue';

Vue.config.productionTip = false;
/**/
new Vue({
    data() {
        return {
            server:bimServer,
            appId:motorAppId,
            secret:motorSecret,
            projectId:bimProjectId
        }
    },
    template:`<motor-viewer appId=${motorAppId} secret=${motorSecret} projectId=${bimProjectId} server=${bimServer} />`,
    components:{MotorViewer}
    // render:h=>h(MotorViewer,bimProjectId)
}).$mount("#app")
