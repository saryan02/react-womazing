import {RootState} from "../../store";

export const selectPageLink = (state: RootState) => (state.headerSlice.pageLink)