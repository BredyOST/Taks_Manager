import { FilterSliceType } from '../slices/filterSlice/filterSlice';
import { IAdditionalIndicators} from "../slices/additionalIndicators/additionalIndicators";

export interface IStore {
    filter: FilterSliceType;
    additionalIndicators:IAdditionalIndicators;
}
