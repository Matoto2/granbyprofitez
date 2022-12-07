import moment from 'moment'

import 'moment/locale/fr'

import 'moment-timezone'

moment.locale('fr')

moment.tz.setDefault('America/New_York')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
