(function () {
  /* eslint-disable no-new */
  const butInstall = document.getElementById('install-button')

  /* Put code here */
  window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault()
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event
    // Remove the 'hidden' class from the install button container.
    butInstall.classList.toggle('hidden', false)
  })

  butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return
    }
    // Show the install prompt.
    promptEvent.prompt()
    // Log the result
    await promptEvent.userChoice
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null
    // Hide the install button.
    butInstall.classList.toggle('hidden', true)
  })
  window.addEventListener('appinstalled', (event) => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null
  })
  /* Only register a service worker if it's supported */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
  }

  /**
     * Warn the page must be served over HTTPS
     * The `beforeinstallprompt` event won't fire if the page is served over HTTP.
     * Installability requires a service worker with a fetch event handler, and
     * if the page isn't served over HTTPS, the service worker won't load.
     */
  if (window.location.protocol === 'http:') {
    const requireHTTPS = document.getElementById('requireHTTPS')
    const link = requireHTTPS.querySelector('a')
    link.href = window.location.href.replace('http://', 'https://')
    requireHTTPS.classList.remove('hidden')
  }

  window.addEventListener('appinstalled', (event) => {
    // console.log('👍', 'appinstalled', event)
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null
  })
})()
