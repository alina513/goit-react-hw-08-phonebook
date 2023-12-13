import { createSlice} from "@reduxjs/toolkit";

const filterInitialState = {value: ""};

const filterSlice = createSlice({
    name: "filters",
    initialState: filterInitialState,
    reducers: {
        updateFilter(state, action) {
           state.value =  action.payload
        },
    },
});

export const {updateFilter} = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;