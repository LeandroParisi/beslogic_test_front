import METHODS from './methods'

require('dotenv').config()

const env = process.env.REACT_APP_ENV

const backendUrl = {
  dev: `${process.env.REACT_APP_LOCAL_URL}`,
}

const routes = {
  items: '/items',
}

const defaultEndpointsEnum = new Set(['findAll', 'activate', 'deactivate', 'updateOne', 'create', 'deleteOne'])

const defaultEndpoints = {
  findAll: {
    endpoint: '',
    method: METHODS.GET,
  },
  activate: {
    endpoint: '/activate',
    method: METHODS.PUT,
  },
  deactivate: {
    endpoint: '/deactivate',
    method: METHODS.PUT,
  },
  updateOne: {
    endpoint: '',
    method: METHODS.PUT,
  },
  create: {
    endpoint: '',
    method: METHODS.POST,
  },
  deleteOne: {
    endpoint: '',
    method: METHODS.DELETE,
  },
}

const customEndpoints = {
  items: {
  },
}

const getRoute = (route, ep) => {
  const { endpoint, method } = defaultEndpointsEnum.has(ep)
    ? defaultEndpoints[ep]
    : customEndpoints[route][ep]

  return {
    url: `${backendUrl[env]}${routes[route]}${endpoint}`,
    method,
  }
}

export default getRoute
