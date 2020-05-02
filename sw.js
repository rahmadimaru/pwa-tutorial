// Install Service Worker
self.addEventListener('install',evt=>{
    console.log("Service Worker has been installed");
});

// Activate service worker
self.addEventListener('activate',evt=>{
    console.log("Service Worker has been activated");
});

self.addEventListener('fetch',evt=>{
    console.log('fetch event',evt);
});