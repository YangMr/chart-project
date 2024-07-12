import services from '@/utils/request.js'

export const getOverviewList = () => {
  return services({ url: '/overview', method: 'GET' })
}
