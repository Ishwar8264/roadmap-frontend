import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * Typed dispatch hook.
 * Use this instead of normal useDispatch.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/**
 * Typed selector hook.
 * Use this instead of normal useSelector.
 */
export const useAppSelector = useSelector.withTypes<RootState>();
