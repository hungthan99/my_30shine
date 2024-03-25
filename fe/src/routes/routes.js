import About from '~/pages/About';
import Home from '~/pages/Home';
import config from '~/config';
import SystemSalon from '~/pages/SystemSalon';
import ShineMember from '~/pages/ShineMember';
import { CurlHair, CutHair } from '~/pages/services/HairService';
import { Massage } from '~/pages/services/SpaService';
import Question from '~/pages/Question';
import Cosmetics from '~/pages/Cosmetics';
import { MasterTime, ModernEquipment, PrimeLocation } from '~/pages/spaces';
import ShineCare from '~/pages/ShineCare';
import Policy from '~/pages/Policy';
import ContactAdvertising from '~/pages/ContactAdvertising';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.systemSalon, component: SystemSalon },
    { path: config.routes.shineMember, component: ShineMember },
    { path: config.routes.cutHairService, component: CutHair },
    { path: config.routes.curlHairService, component: CurlHair },
    { path: config.routes.dyingHairService, component: CurlHair },
    { path: config.routes.massageService, component: Massage },
    { path: config.routes.spaService, component: Massage },
    { path: config.routes.earwaxService, component: Massage },
    { path: config.routes.question, component: Question },
    { path: config.routes.cosmetics, component: Cosmetics },
    { path: config.routes.primeLocation, component: PrimeLocation },
    { path: config.routes.modernEquipment, component: ModernEquipment },
    { path: config.routes.masterTime, component: MasterTime },
    { path: config.routes.shineCare, component: ShineCare },
    { path: config.routes.haNoiProvince, component: SystemSalon },
    { path: config.routes.hoChiMinhProvince, component: SystemSalon },
    { path: config.routes.daNangProvince, component: SystemSalon },
    { path: config.routes.policy, component: Policy },
    { path: config.routes.contactAdvertising, component: ContactAdvertising },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
