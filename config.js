var config = {
  address: 'localhost',
  port: 8080,
  basePath: '/',
  ipWhitelist: ['127.0.0.1', '::ffff:127.0.0.1', '::1'],
  useHttps: false,
  httpsPrivateKey: '',
  httpsCertificate: '',

  language: 'en',
  logLevel: ['INFO', 'LOG', 'WARN', 'ERROR'],
  timeFormat: 24,
  zoom: 5.0,
  units: 'metric',
  modules: [
    {
      module: 'alert'
    },
    {
      module: 'clock',
      position: 'top_left',
      config: {
        displaySeconds: false,
        dateFormat: 'dddd, MMMM D'
      }
    },
    {
      module: 'weather',
      position: 'top_right',
      config: {
        weatherProvider: 'openweathermap',
        units: 'imperial',
        tempUnits: 'imperial',
        updateInterval: '1200000',
        showFeelsLike: false,
        type: 'current',
        locationID: '5368361',
        apiKey: '{{OPENWEATHERMAP_API_KEY}}'
      }
    }
  ]
}

/** DO NOT EDIT THE LINE BELOW **/
if (typeof module !== 'undefined') { module.exports = config }
