import PricesDataService from '../services/prices.services'
import { getQuote } from './actions'

export function submitFields(region, meter, contractlength, commission) {
    return function (dispatch) {
        PricesDataService.findByRegion(region, meter, contractlength, commission)
            .then((result) => { dispatch(getQuote(result.data)) })
            .catch((err) => { console.log(err) })
    }
}