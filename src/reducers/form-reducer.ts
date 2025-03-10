

export type FormState = {

    businessType: string;
    moneyNeeded: string;
    purpose: string;
    businessAge: string;
    annualRevenue: string;
    creditScore: string;
    industry: string;
    zipCode: string;
    businessName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;


    stepIndex: number;

}

export const initialFormState: FormState = {
    businessType: '',
    moneyNeeded: '',
    purpose: '',
    businessAge: '',
    annualRevenue: '',
    creditScore: '',
    industry: '',
    zipCode: '',
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',


    stepIndex: 0,
}



// add a use effect to keep track of refreshes and put info back into state from local storage

// Define the types of actions
export type FormActions =
    | {type: 'CLEAR_STATE';}
    | {type: 'UPDATE_FIELD'; field: keyof FormState; value: string}
    | {type: 'INCREASE_STEP';}
    | {type: 'DECREASE_STEP';}





export function formReducer(state: FormState, action: FormActions): FormState {

    switch (action.type) {



        case "INCREASE_STEP":
            return {
                ...state,
                stepIndex: state.stepIndex + 1,
            };
        
        case "DECREASE_STEP":
            return {
                ...state,
                stepIndex: state.stepIndex - 1,
            };
        case "CLEAR_STATE":
            return {
                ...initialFormState,
            };

        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value,
            };



        // default:
        //     return state;
    }
}