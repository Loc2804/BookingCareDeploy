const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE:'CHANGE_LANGUAGE',
    
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin:
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',
    
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    CREATE_USER_SUCCESS:'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    DELETE_USER_SUCCESS:'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED:'DELETE_USER_FAILED',

    EDIT_USER_SUCCESS:'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED:'EDIT_USER_FAILED',

    FETCH_TOP_DOCTORS_SUCCESS:'FETCH_TOP_DOCTORS_SUCCESS',
    FETCH_TOP_DOCTORS_FAILED:'FETCH_TOP_DOCTORS_FAILED',
    
    FETCH_ALL_DOCTORS_SUCCESS:'FETCH_ALL_DOCTORS_SUCCESS',
    FETCH_ALL_DOCTORS_FAILED:'FETCH_ALL_DOCTORS_FAILED',

    SAVE_DETAIL_DOCTOR_SUCCESS:'SAVE_DETAIL_DOCTOR_SUCCESS',
    SAVE_DETAIL_DOCTOR_FAILED:'SAVE_DETAIL_DOCTOR_FAILED',

    FETCH_TIME_SUCCESS: 'FETCH_TIME_SUCCESS',
    FETCH_TIME_FAILED: 'FETCH_TIME_FAILED',

    GET_DOCTOR_PRICE_SUCCESS:"GET_DOCTOR_PRICE_SUCCESS", 
    GET_DOCTOR_PRICE_FAILED:"GET_DOCTOR_PRICE_FAILED",

    GET_DOCTOR_PAYMENT_SUCCESS:"GET_DOCTOR_PAYMENT_SUCCESS",
    GET_DOCTOR_PAYMENT_FAILED:"GET_DOCTOR_PAYMENT_FAILED",

    GET_DOCTOR_PROVINCE_SUCCESS:" GET_DOCTOR_PROVINCE_SUCCESS",
    GET_DOCTOR_PROVINCE_FAILED:"GET_DOCTOR_PROVINCE_FAILED",

    GET_SPECIALTY_SUCCESS:"GET_SPECIALTY_SUCCESS",
    GET_SPECIALTY_FAILED:"GET_SPECIALTY_FAILED",

    GET_CLINIC_SUCCESS:"GET_CLINIC_SUCCESS",
    GET_CLINIC_FAILED:"GET_CLINIC_FAILED",
})

export default actionTypes;