import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispath } from "../store";

export const useAppDispatch = () =>useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
