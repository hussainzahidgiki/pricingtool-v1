import http from '../http-common'

class PricesDataService {

    findByRegion(region, meter, contractlength, commission) {
        return http.get(`/api/prices?Region=${region}&Meter=${meter}&Contractlength=${contractlength}&CommissionUpliftpKWH=${commission}`);
    }
}

export default new PricesDataService();