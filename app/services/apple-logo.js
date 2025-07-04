import Service from '@ember/service';

export default class AppleLogoService extends Service {
  canShowAppleLogo = (() => {
    const userAgent = navigator.userAgent;
    return ['iPhone', 'iPad', 'Macintosh'].some((platform) => {
      return userAgent.includes(platform);
    });
  })();
}
