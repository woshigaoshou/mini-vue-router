import install from './install';
import createMatcher from './create-matcher';
import HTML5History from './history/history';
import HashHistory from './history/hash';

class VueRouter {
  constructor (options) {
    this.routes = options.routes || [];
    this.mode = options.mode || 'hash';
    this.matcher = createMatcher(options.routes);
    this.beforeEachHooks = [];
    
    switch (this.mode) {
      case 'history':
        this.history = new HTML5History(this);
        break;
      
      case 'hash':
        this.history = new HashHistory(this);
        break;
    }
  }
  init (app) {
    const history = this.history;

    history.listen(route => {
      app._route = route;
    })

    history.transitionTo(history.getCurrentLocation(), () => {
      history.setupListener();
    });
  }
  match (location) {
    return this.matcher.match(location);
  }
  beforeEach (cb) {
    this.beforeEachHooks.push(cb);
  }
  push (location) {
    const history = this.history;

    history.push(location);
  }
}

VueRouter.install = install;

export default VueRouter;
