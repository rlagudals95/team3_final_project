import { atom } from 'recoil';
import { recoilPersist } from "recoil-persist";
import axiosInstance from '../apis/axiosInstance';
// recoil-persist
const { persistAtom } = recoilPersist();

export default atom<string>({
    key: 'userToken',
    default: '',
    effects_UNSTABLE: [persistAtom],
});