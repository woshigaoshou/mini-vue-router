import Base from './base';

class HTML5History extends Base {
  constructor (router) {
    super(router)
  }
  setupListener () {
    window.addEventListener('popstate', () => {
      this.transitionTo(this.getCurrentLocation(), () => {
        // window.location.pathname = location;
      });
    })
  }
  getCurrentLocation () {
    return window.location.pathname;
  }
  push (location) {
    this.transitionTo(location, () => {
      window.location.pathname = location;
    });
  }
}

export default HTML5History
