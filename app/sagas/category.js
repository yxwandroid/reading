/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { put, take, call, fork } from 'redux-saga/effects';
import store from 'react-native-simple-store';
import * as types from '../constants/ActionTypes';
import ToastUtil from '../utils/ToastUtil';
import RequestUtil from '../utils/RequestUtil';
import { WEXIN_ARTICLE_TYPE } from '../constants/Urls';
import { fetchTypeList, receiveTypeList } from '../actions/category';

export function* requestTypeList() {
  try {
    yield put(fetchTypeList());
    const typeList = yield call(RequestUtil.request, WEXIN_ARTICLE_TYPE, 'get');
    yield put(receiveTypeList(typeList.showapi_res_body.typeList));   //Put 触发一个 action
    yield call(store.save, 'typeList', typeList.showapi_res_body.typeList);   // call 调用一个函数
    const errorMessage = typeList.showapi_res_error;
    if (errorMessage && errorMessage !== '') {
      yield ToastUtil.showShort(errorMessage);
    }
  } catch (error) {
    yield put(receiveTypeList([]));
    yield ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestTypeList() {
  while (true) {
    yield take(types.REQUEST_TYPE_LIST);  //take  暂停并等待 action 到达
    yield fork(requestTypeList);     //fork  执行非阻塞的操作
  }
}
