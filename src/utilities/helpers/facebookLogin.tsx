//es-lint-disable-next-line
declare const FB: any;
const facebookLoginFlow = () => {
  FB.login(function (response: any) {
    // handle the response
  });
};
export default facebookLoginFlow;
