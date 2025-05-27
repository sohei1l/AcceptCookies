// Auto Cookie Consent Extension
(function () {
  const cookieConsent = document.querySelector(
    'button[data-testid="cookie-consent-accept-button"]'
  );
  if (cookieConsent) {
    cookieConsent.click();
  }
})();
