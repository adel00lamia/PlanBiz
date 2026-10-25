/* Vercel Web Analytics Initialization
 * This script initializes Vercel Web Analytics for the PlanBiz application.
 * The analytics will automatically track page views and web vitals.
 */

// Initialize the Vercel Analytics queue
(function() {
  // Set up the analytics queue if it doesn't exist
  window.va = window.va || function () { 
    (window.vaq = window.vaq || []).push(arguments); 
  };
})();
