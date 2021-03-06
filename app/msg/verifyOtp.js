/*
 * @Project Bluezone
 * @Author Bluezone Global (contact@bluezone.ai)
 * @Createdate 04/26/2020, 16:36
 *
 * This file is part of Bluezone (https://bluezone.ai)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

import {defineMessages} from 'react-intl';

export default defineMessages({
  title: {
    id: 'bluezone.verifyOTP.title',
    defaultMessage: 'Xác thực mã OTP',
  },
  enterPin: {
    id: 'bluezone.verifyOTP.enterPin',
    defaultMessage: 'Mã OTP đã được gửi qua số điện thoại:',
  },
  pleaseEnterPin: {
    id: 'bluezone.verifyOTP.pleaseEnterPin',
    defaultMessage: 'Vui lòng nhập mã OTP',
  },
  validPin: {
    id: 'bluezone.verifyOTP.validPin',
    defaultMessage: 'Mã có hiệu lực trong',
  },
  confirm: {
    id: 'bluezone.verifyOTP.confirm',
    defaultMessage: 'Xác nhận',
  },
  receivedOTP: {
    id: 'bluezone.verifyOTP.receivedOTP',
    defaultMessage: 'Bạn chưa nhận được mã OTP hoặc mã đã hết hạn?',
  },
  skip: {
    id: 'bluezone.register.skip',
    defaultMessage: 'Bỏ qua',
  },
  resetOTP: {
    id: 'bluezone.verifyOTP.resetOTP',
    defaultMessage: 'Gửi lại mã OTP',
  },
  optNotValid: {
    id: 'bluezone.verifyOTP.optNotValid',
    defaultMessage: 'Mã OTP không hợp lệ, hoặc đã hết hạn',
  },
  retry: {
    id: 'bluezone.verifyOTP.retry',
    defaultMessage: 'Thử lại',
  },
  saveOTP: {
    id: 'bluezone.verifyOTP.saveOTP',
    defaultMessage: 'Vui lòng nhập lại mã OTP',
  },
  otpsuccess: {
    id: 'bluezone.verifyOTP.otpsuccess',
    defaultMessage: 'Xác thực OTP thành công',
  }
});
