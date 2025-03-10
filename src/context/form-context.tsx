// import {FormActions, formReducer, FormState, initialFormState} from '@/reducers/form-reducer';
// import React, {createContext, useReducer, useContext, ReactNode} from 'react';

// type FormContextType = {
//     state: FormState;
//     dispatch: React.Dispatch<FormActions>;
// };

// const FormContext = createContext<FormContextType | undefined>(undefined);

// export const useForm = () => {
//     const context = useContext(FormContext);
//     if (!context) {
//         throw new Error('useForm must be used within a FormProvider');
//     }
//     return context;
// };

// const FormProvider = ({children}: {children: ReactNode}) => {
//     const [state, dispatch] = useReducer(formReducer, initialFormState);

//     return (
//         <FormContext.Provider value= {{state, dispatch}
// }>
//     {children}
//     </FormContext.Provider>
//     );
// };

// export default FormProvider;
import {FormActions, formReducer, FormState, initialFormState} from '@/reducers/form-reducer';
import React, {createContext, useReducer, useContext, ReactNode, useEffect} from 'react';

const FORM_STORAGE_KEY = 'form-data';

type FormContextType = {
    state: FormState;
    dispatch: React.Dispatch<FormActions>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};

const FormProvider = ({children}: {children: ReactNode}) => {
    // Load stored form state from localStorage
    const getStoredFormState = (): FormState => {
        try {
            const storedData = localStorage.getItem(FORM_STORAGE_KEY);
            return storedData ? JSON.parse(storedData) : initialFormState;
        } catch (error) {
            console.error('Error loading form state:', error);
            return initialFormState;
        }
    };

    const [state, dispatch] = useReducer(formReducer, getStoredFormState());

    // Save form state to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
