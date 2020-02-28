/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2020-02-27 17:47:23
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2020-02-28 11:18:50
 * @Description: 工具
 */

/**
 * 日期格式化
 * 对 Date 的扩展，将 Date 转化为指定格式的 String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * @param {(Object|string|number)} date
 * @param {String} format
 * eg:
 * dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * dateFormat(new Date(),"yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * dateFormat(new Date(),"yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * dateFormat(new Date(),"yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * dateFormat(new Date(),"yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
export function dateFormat(date, format) {
  var iDate = null
  if (typeof date === 'number') {
    iDate = new Date(date)
  } else if (typeof date === 'string') {
    date = date.replace(/-/g, '/')
    if (date.indexOf('T') > -1) {
      const dotIndex = date.indexOf('.')
      date = date.substr(0, dotIndex)
      date = date.replace('T', ' ')
      date = new Date(date).getTime()
    }

    if (!isNaN(Number(date))) {
      date = Number(date)
    }

    iDate = new Date(date)
  } else if (date instanceof Date) {
    iDate = date
  } else {
    return false
  }

  // 时区
  // var timestamp = iDate.getTime()/1000 - 8 * 60 * 60;
  // iDate = new Date(timestamp*1000);

  var o = {
    'M+': iDate.getMonth() + 1, // 月份
    'd+': iDate.getDate(), // 日
    'h+': iDate.getHours() % 24 === 0 ? 24 : iDate.getHours() % 24, // 小时
    'H+': iDate.getHours(), // 小时
    'm+': iDate.getMinutes(), // 分
    's+': iDate.getSeconds(), // 秒
    'q+': Math.floor((iDate.getMonth() + 3) / 3), // 季度
    'S': iDate.getMilliseconds() // 毫秒
  }

  if (!format) {
    format = 'yyyy-MM-dd hh:mm:ss'
  }
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (iDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(format)) {
    format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[iDate.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return format
}

/**
 * 传入时间戳，返回距当前时间的时间差
 * @param {Object,Number} time
 * eg:
 * timeDifference('1582855443') ==> 刚刚
 * timeDifference('1582855443') ==> 23分钟前
 * timeDifference('1582855443') ==> 1月26日1时43分
 */
export function timeDifference(time) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 返回 URL 中包含的参数
 * @param {String} url
 * eg:
 * findUrlParam('http://localhost:9528/#/format-time?id=0&name=admin') ==> { id: "0", name: "admin" }
 */
export function findUrlParam(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"')
    .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * 根据对象的某个属性去重
 * @param {Array} data
 * @param {String} property
 */
export function filterFun(data, property) {
  const map = new Map()
  return data.filter((a) => !map.has(a[property]) && map.set(a[property], 1))
}

/**
 * 根据对象的某个属性值的大小排序
 * @param {Array} data
 * @param {String} property
 */
export function sortByProperty(data, property) {
  return data.sort(
    (a, b) => {
      const value1 = a[property]
      const value2 = b[property]
      return value1 - value2
    }
  )
}

/**
 * 根据对象中的时间排序
 * @param {Array} data
 */
export function sortByDate(data) {
  return data.sort(
    (a, b) => {
      return (
        Date.parse(b.date.replace(/-/g, '/')) -
        Date.parse(a.date.replace(/-/g, '/'))
      )
    }
  )
}
