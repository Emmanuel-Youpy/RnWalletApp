import axios from "axios"

export const GET_HOLDINGS_BEGIN='GET_HOLDINGS_BEGINS',
export const GET_HOLDINGS_SUCCESS='GET_HOLDINGS_SUCCESS',
export const GET_HOLDINGS_FAILURE='GET_HOLDINGS_FAILURE',
export const GET_COIN_MARKET_BEGIN='GET_COIN_MARKET_BEGIN'
export const GET_COIN_MARKET_SUCESS='GET_COIN_MARKET_SUCESS'
export const GET_COIN_MARKET_FAILURE='GET_COIN_MARKET_FAILURE'


// Holding /My Holdings

export const getHoldingsBegin =()=>({
    type: GET_HOLDINGS_BEGIN
})

export const getHoldingsSuccess =(myHoldings) => ({
    type: GET_HOLDINGS_SUCCESS,
    payload:{myHoldings}
})

export const getHoldingsFailure =(error) =>({
    type: GET_HOLDINGS_FAILURE,
    payload: {error}
})