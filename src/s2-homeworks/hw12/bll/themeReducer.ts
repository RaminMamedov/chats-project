
const initState = {
    themeId: 1,
};

type ThemeState = {
    themeId: number;
};


export const themeReducer = (state = initState, action: changeThemeIdType): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            };
        default:
            return state;
    }
};

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const);
export type changeThemeIdType = ReturnType<typeof changeThemeId>

