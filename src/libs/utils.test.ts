/*
 * @Author: fujia_zhang
 * @Date: 2020-07-07 15:41:37
 * @LastEditors: fujia_zhang
 * @LastEditTime: 2020-07-07 16:21:19
 * @Description:
 */
import utils from "./utils";

describe('utils', () => {
  /* 测试storage Group */
  describe('storage', () => {
    test('setItem Function', () => {
      utils.storage.setItem('token', '123').then(res => {
        expect(window.localStorage.getItem('token')).toBe('123')
      })

    })
    test('getItem Function', () => {
      window.localStorage.setItem('token', '123')
      utils.storage.getItem('token').then(res => {
        expect(res).toBe('123')
      })
    })
    test('setObject Function', () => {
      const obj = { name: 'fujia' }
      utils.storage.setObject(name, obj).then(res => {
        expect(window.localStorage.getItem('name')).toBe(JSON.stringify(obj))
      })
    })
    test('getObject Function', () => {
      const obj = { name: 'fujia' }
      window.localStorage.setItem('name', JSON.stringify(obj))
      utils.storage.getObject('name').then(res => {
        expect(res).toBe(obj)
      })
    })
    test('clear', () => {
      window.localStorage.setItem('name', 'name')
      utils.storage.clear().then(() => { expect(window.localStorage.getItem('name')).toBe(null) })
    })
  })
  //不写了 没意思
})