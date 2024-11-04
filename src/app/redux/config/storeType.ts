import { FilterSliceType } from '../slices/filterSlice/filterSlice';
import {IActiveTaskForPortalState} from "../slices/acitiveTaskForPortal/acitiveTaskForPortal";

export interface IStore {
    filter: FilterSliceType;
    activeTaskForPortal:IActiveTaskForPortalState;
}
