// Auto Cookie Consent Extension
(function () {
  "use strict";

  // Common selectors for cookie consent buttons
  const acceptSelectors = [
    // Generic patterns
    '[data-testid*="accept"]',
    '[id*="accept"]',
    '[class*="accept"]',
    'button[aria-label*="Accept"]',
    'button[title*="Accept"]',

    // Common cookie banner frameworks
    "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
    ".cc-allow",
    ".cc-dismiss",
    ".cookie-accept",
    ".accept-cookies",
    ".consent-accept",
    ".gdpr-accept",

    // OneTrust
    "#onetrust-accept-btn-handler",
    ".optanon-allow-all",

    // Cookiebot
    "#CybotCookiebotDialogBodyButtonAccept",

    // Note: Text-based matching is handled separately below

    // CookieConsent
    ".cc-btn.cc-allow",
    ".cc-btn.cc-deny",
    ".cc-btn.cc-accept-all",
    ".cc-btn.cc-reject-all",

    // CookieYes
    ".cky-btn-accept",
    ".cky-btn-reject",
    ".cky-btn-accept-all",
    ".cky-btn-reject-all",
  ];

  // Function to click accept button
  function clickAcceptButton() {
    for (const selector of acceptSelectors) {
      // Handle CSS selectors
      let elements = document.querySelectorAll(selector);

      for (const element of elements) {
        if (element && element.offsetParent !== null) {
          // Check if visible
          console.log("Auto-accepting cookies via:", selector);
          element.click();
          return true;
        }
      }
    }

    // Additional text-based search for buttons
    const buttons = document.querySelectorAll('button, a, div[role="button"]');
    for (const button of buttons) {
      const text = button.textContent?.toLowerCase() || "";
      const ariaLabel = button.getAttribute("aria-label")?.toLowerCase() || "";

      if (
        (text.includes("accept") ||
          text.includes("allow") ||
          text.includes("agree") ||
          ariaLabel.includes("accept") ||
          ariaLabel.includes("allow")) &&
        button.offsetParent !== null
      ) {
        console.log(
          "Auto-accepting cookies via text match:",
          text || ariaLabel
        );
        button.click();
        return true;
      }
    }

    return false;
  }

  // Run immediately
  setTimeout(clickAcceptButton, 1000);

  // Also run when DOM changes (for dynamically loaded banners)
  const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;

    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        shouldCheck = true;
      }
    });

    if (shouldCheck) {
      setTimeout(clickAcceptButton, 500);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Clean up observer when page unloads
  window.addEventListener("beforeunload", () => {
    observer.disconnect();
  });
})();
