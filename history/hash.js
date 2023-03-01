import Base from './base';

function ensureSlash () {
  if (window.location.hash) return;
  window.location.hash = '/';
}

class HashHistory extends Base {
  constructor (router) {
    super(router)
    console.log('hash');
    
    ensureSlash();
  }
  setupListener () {
    window.addEventListener('hashchange', () => {
      this.transitionTo(this.getCurrentLocation(), () => {
        // window.location.hash = location;
      });
    })
  }
  getCurrentLocation () {
    return window.location.hash.slice(1);
  }
  push (location) {
    this.transitionTo(location, () => {
      window.location.hash = location;
    });
  }
}

export default HashHistory
