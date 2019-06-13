import config from '../config.json'
import upperFirst from 'lodash/upperFirst'

function getIndexChildrenRoutes (config) {
  return Object.keys(config).reduce((result, moduleName) => {
    let componentName = upperFirst(moduleName),
      type = config[moduleName].type,
      path = config[moduleName].path || moduleName
    result.push({
      path: path,
      component: () => import(`pages/${type}/${componentName}`),
      meta: {moduleName}
    })
    result.push({
      path: `${path}/:id`,
      component: () => import(`pages/${type}/${componentName}`),
      meta: {moduleName}
    })
    if (moduleName === 'calcs') {
      result.push({
        path: `${path}/:id/device/:deviceId`,
        component: () => import(`pages/${type}/${componentName}`),
        meta: {moduleName}
      })
    }
    return result
  }, [])
}

export default [
  {
    path: '/',
    component: () => import('layouts/Index'),
    children: [
      ...getIndexChildrenRoutes(config),
      {
        path: 'view/:type/:id',
        name: 'module',
        component: () => import('layouts/Index')
      }
    ]
  },
  { path: '/token/:token/type/:type/id/:id', component: () => import('layouts/Index') },
  { path: '/token/:token/group/:group', component: () => import('layouts/Index') },
  { path: '/token/:token/type/:type/id/:id/fullscreen/:fullscreen', component: () => import('layouts/Index') },
  { path: '/token/:token/type/:type/id/:id/fullscreen/:fullscreen/noselect/:noselect', component: () => import('layouts/Index') },
  { path: '/login', component: () => import('pages/Login'), name: 'simpleLogin' },
  { path: '/login/:token', component: () => import('pages/Login') }
]
