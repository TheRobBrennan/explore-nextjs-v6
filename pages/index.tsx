import App from '../layout/App';
const config = require('../package.json');
const { next: nextJSVersion, react: reactVersion } = config.dependencies;

export default () => (
  <App>
    <div className="heading">
      [DEMO] NextJS {nextJSVersion} and React {reactVersion}
    </div>
    <style>{`
      /* Sample inline styles */
      .heading {
        font-size: 50px
      }
    `}
    </style>
  </App>
);