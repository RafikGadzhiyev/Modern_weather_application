import { Action } from "redux";

interface ActionWithPayload extends Action {
    payload: {
        current_measurement: 'c' | 'f';
    }
}

export const changeMeasurement = (current: 'c' | 'f'): ActionWithPayload => {
    return {
        type: "CHANGE_MEASUREMENT",
        payload: {
            current_measurement: current
        }
    }
}