const ENVIRONMENT = 'PRE';
let URL = {};
let YOUTUBE_KEY = 'AIzaSyD-9OEbupcUnu6i_7DB4BUhQ0O_MuwWFns';

switch (ENVIRONMENT) {
  case 'LOCAL':
    URL.NOTICE_URL = 'https://s.stage.sbwebservices.net/';
    URL.API_WISHLIST = 'https://wishlist-api.pre.superbid.net';
    URL.API_ACCOUNTS = 'https://accounts.pre.superbid.net';
    URL.API_S4DIGITAL = 'https://preapi.s4bdigital.net';
    URL.MYACCOUNT = 'https://myaccount.pre.superbid.com';
    URL.MARKETPLACE = 'https://prefaststore.superbid.net';
    URL.API_BIDTV = 'https://bidtv-api.pre.superbid.net';
    URL.API_SBWEBSERVICES = 'https://stgapi.sbwebservices.net/';
    URL.WISHLISTWEBAPP = 'https://querocomprar.pre.superbid.net/';
    URL.API_WEBSOCKET = 'http://localhost:8080/';
    URL.S4DIGITAL_STATIC = 'https://static.s4bdigital.net';
    URL.WEB_MARKETPLACE = 'https://prefaststore.superbid.net/';
    URL.BIDTV_WEB_URL = 'https://bidtv.pre.superbid.net';
    break;
  case 'PRE':
    URL.NOTICE_URL = 'https://s.stage.sbwebservices.net/';
    URL.API_WISHLIST = 'https://wishlist-api.pre.superbid.net';
    URL.API_ACCOUNTS = 'https://accounts.pre.superbid.net';
    URL.API_S4DIGITAL = 'https://preapi.s4bdigital.net';
    URL.MYACCOUNT = 'https://myaccount.pre.superbid.com';
    URL.MARKETPLACE = 'https://prefaststore.superbid.net';
    URL.API_BIDTV = 'https://bidtv-api.pre.superbid.net';
    URL.API_SBWEBSERVICES = 'https://stgapi.sbwebservices.net/';
    URL.WISHLISTWEBAPP = 'https://querocomprar.pre.superbid.net/';
    URL.S4DIGITAL_STATIC = 'https://static.s4bdigital.net';
    URL.API_WEBSOCKET = 'https://bidtv-api.pre.superbid.net/';
    URL.WEB_MARKETPLACE = 'https://prefaststore.superbid.net/';
    URL.BIDTV_WEB_URL = 'https://bidtv.pre.superbid.net';
    break;
  case 'STG':
    URL.NOTICE_URL = 'https://s.stage.sbwebservices.net/';
    URL.API_WISHLIST = 'https://wishlist-api.stage.superbid.net';
    URL.API_ACCOUNTS = 'https://accounts.stage.superbid.net';
    URL.API_S4DIGITAL = 'https://stgapi.s4bdigital.net';
    URL.MYACCOUNT = 'https://myaccount.stage.superbid.com';
    URL.MARKETPLACE = 'https://prefaststore.superbid.net';
    URL.API_BIDTV = 'https://bidtv-api.stage.superbid.net';
    URL.API_SBWEBSERVICES = 'https://stgapi.sbwebservices.net/';
    URL.WISHLISTWEBAPP = 'https://querocomprar.stage.superbid.net/';
    URL.S4DIGITAL_STATIC = 'https://static.s4bdigital.net';
    URL.API_WEBSOCKET = 'https://bidtv-api.stage.superbid.net/';
    URL.WEB_MARKETPLACE = 'https://stgwww.superbid.net/';
    URL.BIDTV_WEB_URL = 'https://bidtv.stage.superbid.net';
    break;
  case 'PRD':
    URL.NOTICE_URL = 'https://s.sbwebservices.net/';
    URL.API_WISHLIST = 'https://wishlist-api.superbid.net';
    URL.API_ACCOUNTS = 'https://accounts.superbid.net';
    URL.API_S4DIGITAL = 'https://api.s4bdigital.net';
    URL.MYACCOUNT = 'https://myaccount.superbid.com';
    URL.MARKETPLACE = 'https://www.superbid.net';
    URL.API_BIDTV = 'https://bidtv-api.superbid.net';
    URL.API_SBWEBSERVICES = 'https://api.sbwebservices.net/';
    URL.WISHLISTWEBAPP = 'https://querocomprar.superbid.net/';
    URL.S4DIGITAL_STATIC = 'https://static.s4bdigital.net';
    URL.API_WEBSOCKET = 'https://bidtv-api.superbid.net/';
    URL.WEB_MARKETPLACE = 'https://www.superbid.net/';
    URL.BIDTV_WEB_URL = 'https://bidtv.superbid.net';
    break;
  case 'MOCK':
    URL.API_BIDTV = 'https://bidtv.free.beeceptor.com/my/api/';
    break;
  default:
    break;
}

export const Config = {
  URL_NOTICE_URL: URL.NOTICE_URL,
  API_WISHLIST_URL: URL.API_WISHLIST,
  API_ACCOUNTS_URL: URL.API_ACCOUNTS,
  API_S4DIGITAL: URL.API_S4DIGITAL,
  API_MYACCOUNT_URL: URL.MYACCOUNT,
  API_MARKETPLACE_URL: URL.MARKETPLACE,
  API_BIDTV_URL: URL.API_BIDTV,
  API_SBWEB_SERVICES: URL.API_SBWEBSERVICES,
  WISHLIST_WEBAPP: URL.WISHLISTWEBAPP,
  S4DIGITAL_STATIC: URL.S4DIGITAL_STATIC,
  API_WEBSOCKET: URL.API_WEBSOCKET,
  MARKETPLACE_WEBAPP: URL.MARKETPLACE_WEBAPP,
  BIDTV_WEB_URL: URL.BIDTV_WEB_URL,
  CLIENT_ID: '5a977bfdd4718fabac6346df4ca578f3-bidtv',
  KEY_YOUTUBE: YOUTUBE_KEY,
};
