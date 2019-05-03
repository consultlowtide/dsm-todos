const fetch = require('node-fetch')
const fs = require('fs')

const writeToStylesFile = data => {
  fs.writeFile('./src/assets/dsm-styles.json', JSON.stringify(data), err => {
    // eslint-disable-next-line
    if (err) console.error(err);
    // eslint-disable-next-line
    console.log("Successfully Written to File.");
  })
}

const massageDSMVariables = retrievedVariables => {
  const { colors, typeStyles } = retrievedVariables
  const styles = {}

  colors.map(colorPalette => {
    colorPalette.colors.map(color => {
      styles[`${color.name}`] = color.value
    })
  })

  styles['font-family'] = `${typeStyles[3]['fontFamily']}`

  writeToStylesFile(styles)
  return styles
}

const DSMVariables = fetch(
  'https://projects.invisionapp.com/dsm-export/low-tide/milk-dud/style-data.json?exportFormat=list&key=H1AY3v6_4'
)
  .then(response => {
    if (response.status !== 200) {
      // eslint-disable-next-line
      console.error(`API ERROR, DSM responded with code: ${response.status}`)
    }

    response.json().then(data => {
      return massageDSMVariables(data.list)
    })
  })
  .catch(error => {
    // eslint-disable-next-line
    console.error(`API ERROR: ${error}`)
  })

return DSMVariables
