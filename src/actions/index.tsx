export const INCREMENT = 'INCREMENT';
export type INCREMENT = typeof INCREMENT;


export interface Increment {
    type: INCREMENT;
}

export type IncrementAction = Increment;

export function increment(): IncrementAction {
    return {
        type: INCREMENT
    };
}
