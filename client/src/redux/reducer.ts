import { AppState } from "./app-state";
import { ActionType } from "./action-type";
import { Action } from "./action";

// This function is NOT called direcrtly by you
export function reduce(oldAppState: AppState, action: Action): AppState {
    // Cloning the oldState (creating a copy)
    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.SendVacationId:
            newAppState.vacationId = action.payload;
            break;
        case ActionType.GetVactionId:
            newAppState.vacationId = action.payload;
            break;
        case ActionType.GetAllVacations:
            newAppState.vacations = action.payload;
            break;
        case ActionType.CheckUserStatus:
            newAppState.isLoggedIn = action.payload
            break;
    }

    // After returning the new state, it's being published to all subscribers
    // Each component will render itself based on the new state
    return newAppState;
}