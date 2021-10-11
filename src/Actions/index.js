export const selectHome=(pay)=>{
    return{
        type: 'SELECT_HOME',
        payload: pay
    };
}

export const selectAbout=(pay)=>{
    return{
        type: 'SELECT_ABOUT',
        payload: pay
    };
}
