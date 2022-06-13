import { Action } from "redux";

export default function Reset(): Action {
    return {
        type: "RESET_SEARCH"
    }
}